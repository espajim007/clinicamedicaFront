import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { medicoEspecialidad } from 'src/app/models/medicoEspecialidad.interface';
import { especialidad } from 'src/app/models/especialidad.interface'; 3
import { medico } from 'src/app/models/medico.interface';
import { EditarMedicoEspecialidadComponent } from '../editar-medico-especialidad/editar-medico-especialidad.component'; 
import { AgregarMedicoEspecialidadComponent } from '../agregar-medico-especialidad/agregar-medico-especialidad.component'; 

@Component({
  selector: 'app-medico-especialidad',
  templateUrl: './medico-especialidad.component.html',
  styleUrls: ['./medico-especialidad.component.scss']
})
export class MedicoEspecialidadComponent implements OnInit {

  medicoEspecialidades: medicoEspecialidad[] = [];
  especialidades: especialidad[] = [];
  medico: medico[] = [];
  page: number = 1;
  medicoEspecialidSeleccionado: medicoEspecialidad | null = null;
  Backup: medicoEspecialidad | null = null; // Variable para guardar la copia de respaldo del usuario
  

  constructor(private catalogosService: CatalogosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.catalogosService.getMedicoEspecialidad().subscribe(
      (data: medicoEspecialidad[]) => {
        this.medicoEspecialidades = data;
      },
      error => {
        console.error('Error al obtener usuarios:', error);
      }
    );

    this.catalogosService.getEspecialidad().subscribe(
      (data: especialidad[]) => {
        this.especialidades = data;
      },
      error => {
        console.error('Error al obtener roles:', error);
      }
    );
    
  }

  abrirModalEditar(data: medicoEspecialidad): void {
    // Guardar una copia de respaldo del usuario seleccionado
    this.Backup = { ...data };
    const dialogRef = this.dialog.open(EditarMedicoEspecialidadComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.medicoEspecialidades.findIndex(u => u.id_medico_especialidad === result.id_medico_especialidad);
        if (index !== -1) {
          this.medicoEspecialidades[index] = result;
        }
      } else {
        // Si se cancela la edición, restaurar la copia de respaldo del usuario
        if (this.Backup) {
          const index = this.medicoEspecialidades.findIndex(u => u.id_medico_especialidad === this.Backup!.id_medico_especialidad);
          if (index !== -1) {
            this.medicoEspecialidades[index] = this.Backup;
          }
        }
      }
      // Limpiar la copia de respaldo del usuario
      this.Backup = null;
    });
  }

  getEspecialidad(id: number): string {
    const dato = this.especialidades.find(dato => dato.id_especialidad === id);
    return dato?.descipcion ?? 'Sin especialidad';
  }
  

  abrirModalAgregar(): void {
    this.dialog.open(AgregarMedicoEspecialidadComponent, {
      width: '400px', // Ajusta el ancho según tus necesidades
      disableClose: true // Opcional, para evitar que el usuario cierre el modal haciendo clic fuera de él
    });
  }


}
