import { Component, OnInit } from '@angular/core';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { Router } from '@angular/router';
import { expediente } from 'src/app/models/expediente.interface'; 
import { fichaPaciente } from 'src/app/models/fichaPaciente.interface'; 

@Component({
  selector: 'app-ficha-paciente',
  templateUrl: './ficha-paciente.component.html',
  styleUrls: ['./ficha-paciente.component.scss']
})
export class FichaPacienteComponent implements OnInit {

  expedientes: expediente[] = [];
  pacientes: fichaPaciente[] = [];
  page: number = 1;

  constructor(private catalogosService: CatalogosService, private router: Router) { }

  ngOnInit(): void {
    this.catalogosService.getExpediente().subscribe(
      (data: expediente[]) => {
        this.expedientes = data;
      },
      error => {
        console.error('Error al obtener lista pacientes:', error);
      }
    );

    this.catalogosService.getFichaPaciente().subscribe(
      (data: fichaPaciente[]) => {
        this.pacientes = data;
      },
      error => {
        console.error('Error al obtener datos del paciente:', error);
      }
    );
  }

  getNombre(id: number): string {
    const dato = this.pacientes.find(dato => dato.id_ficha_paciente === id);
    return (dato?.primer_nombre + ' ' + dato?.segundo_nombre + ' ' + dato?.primer_apellido + ' ' + dato?.segundo_apellido ) ?? '';
  }
  
  getTelefono(id: number): string {
    const dato = this.pacientes.find(dato => dato.id_ficha_paciente === id);
    return String(dato?.telefono) ?? '';  
  }

  // Método para navegar a la página de edición de un paciente
  editar(id: number): void {
    this.router.navigate(['/editar-ficha-paciente', id]);
  }
  ver(id: number): void {
    this.router.navigate(['/ver-ficha-paciente', id]);
  }
}
