// editar-ficha-paciente.component.ts
import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { fichaPaciente } from 'src/app/models/fichaPaciente.interface';
import { direccion } from 'src/app/models/direccion.interface'; 
import { contactoEmergencia } from 'src/app/models/contactoEmergencia.interface';
import { tipoSangre } from 'src/app/models/tipoSangre.interface'; 
import { estadoCivil } from 'src/app/models/estadoCivil.interface'; 
import { genero } from 'src/app/models/genero.interface'; 
import { departamento } from 'src/app/models/departamento.interface'; 
import { municipio } from 'src/app/models/municipio.interface';
import { relacionPaciente } from 'src/app/models/relacionPaciente';
import { aseguradora } from 'src/app/models/aseguradora.interface';
import { ocupacion } from 'src/app/models/ocupacion.interface'; 
import { editarAgregarExpediente } from 'src/app/models/agregaryeditarExpediente.interface';
import { agregaryeditarFichaPAciente } from 'src/app/models/agregaryeditarFichaPaciente.interface';
@Component({
  selector: 'app-editar-ficha-paciente',
  templateUrl: './editar-ficha-paciente.component.html',
  styleUrls: ['./editar-ficha-paciente.component.scss']
})
export class EditarFichaPacienteComponent implements OnInit {

  id: number = 0;
  genero: genero[] = [];
  departamento: departamento[] = [];
  municipio: municipio[] = [];
  relacionPaciente: relacionPaciente[] = [];
  tipoSangre: tipoSangre[] = [];
  estadoCivil: estadoCivil[] = [];
  aseguradora: aseguradora[] = [];
  ocupacion: ocupacion[] = [];

  paciente: agregaryeditarFichaPAciente = {};
  constructor(private route: ActivatedRoute, private catalogosService: CatalogosService, private cdr: ChangeDetectorRef ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.id = +idParam;
    } else {
      console.error("No se proporcionó ningún parámetro 'id' en la URL");
      return;
    }
    this.catalogosService.getPacientePorID(this.id).subscribe(
      (data: agregaryeditarFichaPAciente) => {
        this.paciente = data; // Asigna el objeto recibido directamente a medico, no es necesario un array
        console.log(this.paciente);
        this.cdr.detectChanges();
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
    
    this.catalogosService.getTipoSangre().subscribe(
      (data: tipoSangre[]) => {
        this.tipoSangre = data;
      },
      error => {
        console.error('Error:', error);
      }
    );

    this.catalogosService.getEstadoCivil().subscribe(
      (data: estadoCivil[]) => {
        this.estadoCivil = data;
      },
      error => {
        console.error('Error:', error);
      }
    );
    this.catalogosService.getGenero().subscribe(
      (data: genero[]) => {
        this.genero = data;
      },
      error => {
        console.error('Error:', error);
      }
    );
    this.catalogosService.getAseguradora().subscribe(
      (data: aseguradora[]) => {
        this.aseguradora = data;
      },
      error => {
        console.error('Error:', error);
      }
    );
    this.catalogosService.getMunicipio().subscribe(
      (data: municipio[]) => {
        this.municipio = data;
      },
      error => {
        console.error('Error:', error);
      }
    );
    this.catalogosService.getDepartamento().subscribe(
      (data: departamento[]) => {
        this.departamento = data;
      },
      error => {
        console.error('Error:', error);
      }
    );
    this.catalogosService.getRelaciones().subscribe(
      (data: relacionPaciente[]) => {
        this.relacionPaciente = data;
      },
      error => {
        console.error('Error:', error);
      }
    );
    this.catalogosService.getOcupacion().subscribe(
      (data: ocupacion[]) => {
        this.ocupacion = data;
      },
      error => {
        console.error('Error:', error);
      }
    );
  }
  getSangres(id: number): string {
    const dato = this.tipoSangre.find(dato => dato.id_tipo_sangre === id);
    return dato?.nombre ?? '';
  }
  GetEstadoCiviles(id: number): string {
    const dato = this.estadoCivil.find(dato => dato.id_estado_civil === id);
    return dato?.nombre ?? '';
  }
  getGeneros(id: number): string {
    const dato = this.genero.find(dato => dato.idgenero === id);
    return dato?.genero ?? '';
  }
  GetDepartamentos(id: number): string {
    const dato = this.departamento.find(dato => dato.id_departamento === id);
    return dato?.nombre ?? '';
  }
  getMunicipios(id: number): string {
    const dato = this.municipio.find(dato => dato.id_municipio === id);
    return dato?.nombre ?? '';
  }
  GetRelaciones(id: number): string {
    const dato = this.relacionPaciente.find(dato => dato.id_relacion_paciente === id);
    return dato?.relacion ?? '';
  }
  getAseguradora(id: number): string {
    const dato = this.aseguradora.find(dato => dato.id_aseguradora === id);
    return dato?.nombre ?? '';
  }

  formatDate(date: string): string {
    if (!date) return '';
    const d = new Date(date);
    return `${d.getFullYear()}${this.padNumber(d.getMonth() + 1)}${this.padNumber(d.getDate())}`;
  }

  // Método para analizar la fecha desde el formato AAAAMMDD al formato Date de JavaScript
  parseDate(value: string): Date {
    const year = parseInt(value.substring(0, 4), 10);
    const month = parseInt(value.substring(4, 6), 10) - 1;
    const day = parseInt(value.substring(6, 8), 10);
    return new Date(year, month, day);
  }

  // Método auxiliar para agregar ceros a la izquierda si es necesario
  padNumber(num: number): string {
    return num.toString().padStart(2, '0');
  }

  guardarDatos() {
    console.log(this.paciente);

    this.catalogosService.editarPacienteCompleto(this.paciente).subscribe(
      response => {
        // Manejar respuesta exitosa
        console.log('Paciente editado con éxito:', response);
      },
      error => {
        alert('Error al agregar el registro: ' + error.error);
      }
    );
  }
}
