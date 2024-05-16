import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { estadoCita } from 'src/app/models/estadoCita.interface'; 

@Component({
  selector: 'app-editar-estado-cita',
  templateUrl: './editar-estado-cita.component.html',
  styleUrls: ['./editar-estado-cita.component.scss']
})
export class EditarEstadoCitaComponent implements OnInit {

  constructor(
    private catalogosService: CatalogosService,
    public dialogRef: MatDialogRef<EditarEstadoCitaComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public estadoSeleccionado: estadoCita
  ) { }

  ngOnInit(): void {
  }

  guardarCambios(): void {

    this.catalogosService.editarEstadoCita(this.estadoSeleccionado).pipe(
      catchError(error => {
        console.error('Error al editar estado:', error);
        return of(null);
      })
    ).subscribe(response => {
      if (response !== null) {
        console.log('estado editado:', response);
        // Cerrar la ventana de diálogo solo si la edición se realizó correctamente
        this.dialogRef.close(this.estadoSeleccionado);
      } else {
        console.log('No se pudo editar el estado');
      }
    });
    window.location.reload();
    this.dialogRef.close(this.estadoSeleccionado);
  }
  cerrarModal(): void {
    this.dialogRef.close();
  }
}
