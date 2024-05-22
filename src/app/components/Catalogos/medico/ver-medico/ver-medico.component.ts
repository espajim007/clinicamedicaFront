import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { agregaryeditarMedico } from 'src/app/models/agregaryeditarMedico.interface';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { especialidad } from 'src/app/models/especialidad.interface'; 
import { estadoCivil } from 'src/app/models/estadoCivil.interface'; 
import { genero } from 'src/app/models/genero.interface'; 
import { departamento } from 'src/app/models/departamento.interface'; 
import { municipio } from 'src/app/models/municipio.interface'; 

@Component({
  selector: 'app-ver-medico',
  templateUrl: './ver-medico.component.html',
  styleUrls: ['./ver-medico.component.scss']
})
export class VerMedicoComponent implements OnInit {

  id: number = 0;
  especialidades: especialidad[] = [];
  estados: estadoCivil[] = [];
  generos: genero[] = [];
  departamentos: departamento[] = [];
  municipios: municipio[] = [];

  medico: agregaryeditarMedico = {};
  constructor(private route: ActivatedRoute, private catalogosService: CatalogosService, private cdr: ChangeDetectorRef ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.id = +idParam;
      console.log(this.id)
    } else {
      console.error("No se proporcionó ningún parámetro 'id' en la URL");
      return;
    }
    this.catalogosService.getMedicoPorID(this.id).subscribe(
      (data: agregaryeditarMedico) => {
        this.medico = data; // Asigna el objeto recibido directamente a medico, no es necesario un array
        console.log(this.medico);
        this.cdr.detectChanges();
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
    
    this.catalogosService.getEspecialidad().subscribe(
      (data: especialidad[]) => {
        this.especialidades = data;
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
    this.catalogosService.getEstadoCivil().subscribe(
      (data: estadoCivil[]) => {
        this.estados = data;
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
    this.catalogosService.getGenero().subscribe(
      (data: genero[]) => {
        this.generos = data;
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
    this.catalogosService.getDepartamento().subscribe(
      (data: departamento[]) => {
        this.departamentos = data;
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
    this.catalogosService.getMunicipio().subscribe(
      (data: municipio[]) => {
        this.municipios = data;
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
  );
  }

  getDepartamento(id: number): string {
    const dato = this.departamentos.find(dato => dato.id_departamento === id);
    return dato?.nombre ?? '';
  }

  guardarDatos() {
    console.log(this.medico);

    this.catalogosService.editMedico(this.medico).subscribe(
      response => {
        // Manejar respuesta exitosa
        console.log('Medico editado con éxito:', response);
      },
      error => {
        alert('Error al agregar el registro: ' + error.error);
      }
    );
  }

}
