import { Component, OnInit,ChangeDetectorRef  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-ver-ficha-paciente',
  templateUrl: './ver-ficha-paciente.component.html',
  styleUrls: ['./ver-ficha-paciente.component.scss']
})
export class VerFichaPacienteComponent implements OnInit {

  id: number = 0;
  paciente: agregaryeditarFichaPAciente = { };
  ocupaciones: ocupacion[] = [];
  tiposSangre: tipoSangre [] = [];
  estados: estadoCivil [] = [];
  generos: genero[] = [];
  aseguradoras: aseguradora [] = [];
  municipios: municipio[] = [];
  relaciones: relacionPaciente [] = [];
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

}
