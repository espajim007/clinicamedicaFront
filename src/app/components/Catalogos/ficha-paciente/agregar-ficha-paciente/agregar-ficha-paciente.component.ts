import { Component, OnInit  } from '@angular/core';
import { agregaryeditarFichaPAciente } from 'src/app/models/agregaryeditarFichaPaciente.interface';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { genero } from 'src/app/models/genero.interface';
import { municipio } from 'src/app/models/municipio.interface';
import { ocupacion } from 'src/app/models/ocupacion.interface';
import { tipoSangre } from 'src/app/models/tipoSangre.interface';
import { estadoCivil } from 'src/app/models/estadoCivil.interface';
import { aseguradora } from 'src/app/models/aseguradora.interface';
import { relacionPaciente } from 'src/app/models/relacionPaciente';



@Component({
  selector: 'app-agregar-ficha-paciente',
  templateUrl: './agregar-ficha-paciente.component.html',
  styleUrls: ['./agregar-ficha-paciente.component.scss']
})
export class AgregarFichaPacienteComponent implements OnInit {

  ocupaciones: ocupacion[] = [];
  tiposSangre: tipoSangre [] = [];
  estados: estadoCivil [] = [];
  generos: genero[] = [];
  aseguradoras: aseguradora [] = [];
  municipios: municipio[] = [];
  relaciones: relacionPaciente [] = [];
  paciente: agregaryeditarFichaPAciente = { };
  constructor(private catalogosService: CatalogosService ) {}

  ngOnInit(): void {

    this.catalogosService.getOcupacion().subscribe(
      (data: ocupacion[]) => {
        this.ocupaciones = data;
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
    this.catalogosService.getTipoSangre().subscribe(
      (data: tipoSangre[]) => {
        this.tiposSangre = data;
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
    this.catalogosService.getAseguradora().subscribe(
      (data: aseguradora[]) => {
        this.aseguradoras = data;
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
    this.catalogosService.getRelaciones().subscribe(
      (data: relacionPaciente[]) => {
        this.relaciones = data;
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
  guardarDatos() {
    console.log(this.paciente);

    this.catalogosService.agregarfichaPaciente(this.paciente).subscribe(
      response => {
        // Manejar respuesta exitosa
        console.log('paciente agregado con éxito:', response);
      },
      error => {
        alert('Error al agregar el registro: ' + error.error);
      }
    );
  }

}
