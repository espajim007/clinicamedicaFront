import { Component, OnInit } from '@angular/core';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { Router } from '@angular/router';
import { medico } from 'src/app/models/medico.interface';
import { especialidad } from 'src/app/models/especialidad.interface';
import { empleado } from 'src/app/models/empleado.interface';
import { medicoEspecialidad } from 'src/app/models/medicoEspecialidad.interface';
@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss']
})
export class MedicoComponent implements OnInit {

  medicos: medico[] = [];
  especialidades: especialidad[] = [];
  idEspecialidades: medicoEspecialidad[] = [];
  empleados: empleado[] = [];
  page: number = 1;

  constructor(private catalogosService: CatalogosService, private router: Router) { }

  ngOnInit(): void {
    this.catalogosService.getMedico().subscribe(
      (data: medico[]) => {
        this.medicos = data;
      },
      error => {
        console.error('Error al obtener lista pacientes:', error);
      }
    );

    this.catalogosService.getEspecialidad().subscribe(
      (data: especialidad[]) => {
        this.especialidades = data;
      },
      error => {
        console.error('Error al obtener datos del paciente:', error);
      }
    );
    this.catalogosService.getMedicoEspecialidad().subscribe(
      (data: medicoEspecialidad[]) => {
        this.idEspecialidades = data;
      },
      error => {
        console.error('Error al obtener datos del paciente:', error);
      }
    );
    this.catalogosService.getEmpleados().subscribe(
      (data: empleado[]) => {
        this.empleados = data;
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
  getNombre(id: number): string {
    const dato = this.empleados.find(dato => dato.id_empleado === id);
    return dato?.primer_nombre +' '+ dato?.primer_apellido ?? '';  
  }
  getExpecialidad(id: number): string {
    const dato = this.especialidades.find(dato => dato.id_especialidad === id);
    return String(dato?.nombre) ?? '';  
  }
  getIdEspecialidad(id: number): number {
    const dato = this.idEspecialidades.find(dato => dato.id_medico === id);
    return dato?.especialidad_id_especialidad ?? 0;  
  }
  editar(Medico: number ): void {
    this.router.navigate(['/editar-medico', Medico]);
  }

}
