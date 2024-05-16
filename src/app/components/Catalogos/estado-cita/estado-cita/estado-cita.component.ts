import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { estadoCita } from 'src/app/models/estadoCita.interface'; 
import { EditarEstadoCitaComponent } from '../editar-estado-cita/editar-estado-cita.component'; 
import { AgregarEstadoCitaComponent } from '../agregar-estado-cita/agregar-estado-cita.component'; 

@Component({
  selector: 'app-estado-cita',
  templateUrl: './estado-cita.component.html',
  styleUrls: ['./estado-cita.component.scss']
})
export class EstadoCitaComponent implements OnInit {


  estados: estadoCita[] = [];
  page: number = 1;
  Seleccionado: estadoCita | null = null;
  Backup: estadoCita | null = null; // Variable para guardar la copia de respaldo de los datos
  constructor(private catalogosService: CatalogosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.catalogosService.getEstadoCita().subscribe(
      (data: estadoCita[]) => {
        this.estados = data;
      },
      error => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

  abrirModalEditar(data: estadoCita): void {
    // Guardar una copia de respaldo del usuario seleccionado
    this.Backup = { ...data };
    const dialogRef = this.dialog.open(EditarEstadoCitaComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.estados.findIndex(u => u.id_estado_cita === result.id_estado_cita);
        if (index !== -1) {
          this.estados[index] = result;
        }
      } else {
        // Si se cancela la edición, restaurar la copia de respaldo del usuario
        if (this.Backup) {
          const index = this.estados.findIndex(u => u.id_estado_cita === this.Backup!.id_estado_cita);
          if (index !== -1) {
            this.estados[index] = this.Backup;
          }
        }
      }
      // Limpiar la copia de respaldo del usuario
      this.Backup = null;
    });
  }


  abrirModalAgregar(): void {
    this.dialog.open(AgregarEstadoCitaComponent, {
      width: '400px', // Ajusta el ancho según tus necesidades
      disableClose: true // Opcional, para evitar que el usuario cierre el modal haciendo clic fuera de él
    });
  }

}
