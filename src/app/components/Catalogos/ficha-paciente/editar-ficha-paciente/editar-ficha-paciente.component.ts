// editar-ficha-paciente.component.ts
import { Component, OnInit } from '@angular/core';
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
import { agregaryeditarEmpleado } from 'src/app/models/agregaryeditarEmpleado.interface';
import { editarAgregarExpediente } from 'src/app/models/agregaryeditarExpediente.interface';
@Component({
  selector: 'app-editar-ficha-paciente',
  templateUrl: './editar-ficha-paciente.component.html',
  styleUrls: ['./editar-ficha-paciente.component.scss']
})
export class EditarFichaPacienteComponent implements OnInit {

  id: number = 0;
  paciente: fichaPaciente  [] = [];
  direccion: direccion  [] = [];
  contactoEmergencia: contactoEmergencia [] = [];
  genero: genero[] = [];
  departamento: departamento[] = [];
  municipio: municipio[] = [];
  relacionPaciente: relacionPaciente[] = [];
  tipoSangre: tipoSangre[] = [];
  estadoCivil: estadoCivil[] = [];
  aseguradora: aseguradora[] = [];
  ocupacion: ocupacion[] = [];
  constructor(private route: ActivatedRoute, private catalogosService: CatalogosService) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      this.id = +idParam;
    } else {
      console.error("No se proporcionó ningún parámetro 'id' en la URL");
      return;
    }

    this.catalogosService.getFichaPaciente().subscribe(
      (data: fichaPaciente[]) => {
        const pacienteEncontrado = data.find(p => p.id_ficha_paciente === this.id);
        this.paciente = pacienteEncontrado !== undefined ? [pacienteEncontrado] : [];
      },
      error => {
        console.error('Error al obtener datos del paciente:', error);
      }
    );

    this.catalogosService.getDireccion().subscribe(
      (data: direccion[]) => {
        const direccionEncontrado = data.find(p => p.id_direccion === this.id);
        this.direccion = direccionEncontrado !== undefined ? [direccionEncontrado] : [];
      },
      error => {
        console.error('Error al obtener datos del paciente:', error);
      }
    );
    this.catalogosService.getContacto().subscribe(
      (data: contactoEmergencia[]) => {
        const contactoEncontrado = data.find(p => p.id_contacto_emergencia === this.id);
        this.contactoEmergencia = contactoEncontrado !== undefined ? [contactoEncontrado] : [];
      },
      error => {
        console.error('Error al obtener datos del paciente:', error);
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
    const pacienteEdit: editarAgregarExpediente = {

      id_paciente: this.id,
      aseguradora_id_aseguradora: this.paciente[0].aseguradora_id_aseguradora,
      id_contacto_emergencia: this.paciente[0].id_contacto_emergencia,
    id_direccion: this.paciente[0].id_direccion,
    id_tipo_sangre: this.paciente[0].id_tipo_sangre,
    id_ocupacion: this.paciente[0].id_ocupacion,
    genero_idgenero: this.paciente[0].genero_idgenero,
    id_estado_civil: this.paciente[0].id_estado_civil,
    primer_nombre: this.paciente[0].primer_nombre,
    segundo_nombre: this.paciente[0].segundo_nombre,
    primer_apellido: this.paciente[0].primer_apellido,
    segundo_apellido: this.paciente[0].segundo_apellido,
    DPI: this.paciente[0].DPI,
    fecha_nacimiento: this.paciente[0].fecha_nacimiento,
    telefono: this.paciente[0].telefono,
    correo_electronico: this.paciente[0].correo_electronico,
    NIT: this.paciente[0].NIT,
    observaciones: this.paciente[0].observaciones,
    //Tabla contacto_emergencia
    id_relacion_paciente: this.contactoEmergencia[0].id_relacion_paciente,
    primer_nombre_contacoe: this.contactoEmergencia[0].primer_nombre,
    segundo_nombre_contactoe: this.contactoEmergencia[0].segundo_nombre,
    primer_apellido_contactoe: this.contactoEmergencia[0].primer_apellido,
    segundo_apellido_contactoe: this.contactoEmergencia[0].segundo_apellido,
    telefono_contactoe: this.contactoEmergencia[0].telefono,
    id_generoContacto: this.contactoEmergencia[0].id_genero,
    //Tabla direccion
    id_municipio: this.direccion[0].id_municipio,
    calle: this.direccion[0].calle,
    avenida: this.direccion[0].avenida,
    zona_barrio: this.direccion[0].zona_barrio,
    residencial_colonia: this.direccion[0].residencial_colonia,
    numero_vivienda: this.direccion[0].numero_vivienda,
    indicacion_extra: this.direccion[0].indicacion_extra
    };
  
    // Aquí puedes hacer lo que necesites con el objeto 'expediente', como enviarlo a tu servicio para guardarlo en la base de datos
  }




}
