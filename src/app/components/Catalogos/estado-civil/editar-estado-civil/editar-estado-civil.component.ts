import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { estadoCivil } from 'src/app/models/estadoCivil.interface';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-estado-civil',
  templateUrl: './editar-estado-civil.component.html',
  styleUrls: ['./editar-estado-civil.component.scss']
})
export class EditarEstadoCivilComponent implements OnInit {

  constructor(
    private catalogosService: CatalogosService,
    public dialogRef: MatDialogRef<EditarEstadoCivilComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public estadoSeleccionado: estadoCivil
  ) { }

  ngOnInit(): void {
  }

  guardarCambios(): void {

    this.catalogosService.editarEstadoCivil(this.estadoSeleccionado).pipe(
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
