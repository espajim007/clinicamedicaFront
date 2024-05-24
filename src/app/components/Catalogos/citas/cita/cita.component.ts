import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { cita } from 'src/app/models/cita.interface';
import { fichaPaciente } from 'src/app/models/fichaPaciente.interface';
import { estadoCita } from 'src/app/models/estadoCita.interface';
import { medico } from 'src/app/models/medico.interface';
import { expediente } from 'src/app/models/expediente.interface';
import { EditarCitaComponent } from '../editar-cita/editar-cita.component';
import { empleado } from 'src/app/models/empleado.interface';
import { especialidad } from 'src/app/models/especialidad.interface';
import { medicoEspecialidad } from 'src/app/models/medicoEspecialidad.interface';

@Component({
  selector: 'app-cita',
  templateUrl: './cita.component.html',
  styleUrls: ['./cita.component.scss']
})
export class CitaComponent implements OnInit {

  citas: cita[] = [];
  estados: estadoCita[] = [];
  expedientes: expediente[] = [];
  pacientes: fichaPaciente[] = [];
  medicos: medico[] = [];
  empleados: empleado[] = [];
  especialidades: especialidad[] = [];
  medicoEspecialidades: medicoEspecialidad[] = [];
  page: number = 1;
  citaSeleccionada: cita | null = null;
  Backup: cita | null = null; // Variable para guardar la copia de respaldo de los datos
  constructor(private catalogosService: CatalogosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.catalogosService.getCita().subscribe(
      (data: cita[]) => {
        this.citas = data;
        console.log(this.citas);
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
    this.catalogosService.getEstadoCita().subscribe(
      (data: estadoCita[]) => {
        this.estados = data;
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
    this.catalogosService.getExpediente().subscribe(
      (data: expediente[]) => {
        this.expedientes = data;
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
    this.catalogosService.getFichaPaciente().subscribe(
      (data: fichaPaciente[]) => {
        this.pacientes = data;
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
    this.catalogosService.getMedico().subscribe(
      (data: medico[]) => {
        this.medicos = data;
      },
      error => {
        console.error('Error al obtener datos:', error);
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
    this.catalogosService.getEspecialidad().subscribe(
      (data: especialidad[]) => {
        this.especialidades = data;
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
    this.catalogosService.getMedicoEspecialidad().subscribe(
      (data: medicoEspecialidad[]) => {
        this.medicoEspecialidades = data;
      },
      error => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
  getNombreMedico(id: number): string {
    const dato = this.empleados.find(dato => dato.id_empleado === id);
    return dato?.primer_nombre +' '+ dato?.primer_apellido ?? '';  
  }
  getIdMedico(id: number): number {
    const dato = this.medicos.find(dato => dato.id_empleado === id);
    return dato?.id_empleado  ?? 0;
  }
  getEspecialidad(id: number): string {
    const dato = this.especialidades.find(dato => dato.id_especialidad === id);
    return dato?.nombre ?? '';
  }
  getIdEspecialidad(id: number): number {
    const dato = this.medicoEspecialidades.find(dato => dato.id_medico === id);
    return dato?.especialidad_id_especialidad ?? 0;
  }

  getIdPaciente(id: number): number {
    const dato = this.expedientes.find(dato => dato.id_expediente === id);
    return dato?.paciente_id_paciente  ?? 0;
  }
  getNombrePaciente(id: number): string {
    const dato = this.pacientes.find(dato => dato.id_ficha_paciente === id);
    return dato?.primer_nombre + " " + dato?.primer_apellido  ?? '';
  }
  getTelefono(id: number): number {
    const dato = this.pacientes.find(dato => dato.id_ficha_paciente === id);
    return dato?.telefono  ?? 0;
  }
  getestado(id: number): string {
    const dato = this.estados.find(dato => dato.id_estado_cita === id);
    return dato?.nombre  ?? '';
  }

  abrirModalEditar(data: cita ): void {
    // Guardar una copia de respaldo del usuario seleccionado
    this.Backup = { ...data };
    const dialogRef = this.dialog.open(EditarCitaComponent, {
      width: '400px',
      data: data
    });

}
}