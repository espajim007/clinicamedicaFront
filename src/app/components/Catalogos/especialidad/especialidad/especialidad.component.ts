import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { especialidad } from 'src/app/models/especialidad.interface';
import { EditarEspecialidadComponent } from '../editar-especialidad/editar-especialidad.component';
import { AgregarEspecialidadComponent } from '../agregar-especialidad/agregar-especialidad.component';

@Component({
  selector: 'app-especialidad',
  templateUrl: './especialidad.component.html',
  styleUrls: ['./especialidad.component.scss']
})
export class EspecialidadComponent implements OnInit {

  especialidades: especialidad[] = [];
  page: number = 1;
  Seleccionado: especialidad | null = null;
  Backup: especialidad | null = null; // Variable para guardar la copia de respaldo de los datos
  constructor(private catalogosService: CatalogosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.catalogosService.getEspecialidad().subscribe(
      (data: especialidad[]) => {
        this.especialidades = data;
      },
      error => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

  abrirModalEditar(data: especialidad): void {
    // Guardar una copia de respaldo del usuario seleccionado
    this.Backup = { ...data };
    const dialogRef = this.dialog.open(EditarEspecialidadComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.especialidades.findIndex(u => u.id_especialidad === result.id_especialidad);
        if (index !== -1) {
          this.especialidades[index] = result;
        }
      } else {
        // Si se cancela la edición, restaurar la copia de respaldo del usuario
        if (this.Backup) {
          const index = this.especialidades.findIndex(u => u.id_especialidad === this.Backup!.id_especialidad);
          if (index !== -1) {
            this.especialidades[index] = this.Backup;
          }
        }
      }
      // Limpiar la copia de respaldo del usuario
      this.Backup = null;
    });
  }


  abrirModalAgregar(): void {
    this.dialog.open(AgregarEspecialidadComponent, {
      width: '400px', // Ajusta el ancho según tus necesidades
      disableClose: true // Opcional, para evitar que el usuario cierre el modal haciendo clic fuera de él
    });
  }
}
