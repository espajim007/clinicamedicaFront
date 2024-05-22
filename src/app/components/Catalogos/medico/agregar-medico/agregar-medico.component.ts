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
  selector: 'app-agregar-medico',
  templateUrl: './agregar-medico.component.html',
  styleUrls: ['./agregar-medico.component.scss']
})
export class AgregarMedicoComponent implements OnInit {

  id: number = 0;
  especialidades: especialidad[] = [];
  estados: estadoCivil[] = [];
  generos: genero[] = [];
  departamentos: departamento[] = [];
  municipios: municipio[] = [];

  medico: agregaryeditarMedico = {
    id_medico: 0,
    colegiado: 0,
    id_empleado: 0,
    especialidad_id_especialidad: 2,// para intermedia catalogo medico
    id_especialidad: 2,
    id_genero: 2,
    id_estado_civil: 2,
    primer_nombre: '',
    segundo_nombre: '',
    primer_apellido: '',
    segundo_apellido: '',
    identif: 0,
    fecha_nacimiento: '',
    telefono: 0,
    correo_electronico: '',
    fecha_contratacion: '',
    id_direccion: 0,
    id_departamento: 0,
    id_municipio: 90,
    calle: '',
    avenida: '',
    zona_barrio: '',
    residencial_colonia: '',
    numero_vivienda: '',
    indicacion_extra:''

  };
  constructor(private route: ActivatedRoute, private catalogosService: CatalogosService, private cdr: ChangeDetectorRef ) {}

  ngOnInit(): void {    
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
  guardarDatos() {
    console.log(this.medico);

    this.catalogosService.agregarMedico(this.medico).subscribe(
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
