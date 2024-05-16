import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { ocupacion } from 'src/app/models/ocupacion.interface'; 

@Component({
  selector: 'app-editar-ocupacion',
  templateUrl: './editar-ocupacion.component.html',
  styleUrls: ['./editar-ocupacion.component.scss']
})
export class EditarOcupacionComponent implements OnInit {

  constructor(
    private catalogosService: CatalogosService,
    public dialogRef: MatDialogRef<EditarOcupacionComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public ocupacionSeleccionada: ocupacion
  ) { }

  ngOnInit(): void {
  }

  guardarCambios(): void {

    this.catalogosService.editarOcupacion(this.ocupacionSeleccionada).pipe(
      catchError(error => {
        console.error('Error al editar ocupacion:', error);
        return of(null);
      })
    ).subscribe(response => {
      if (response !== null) {
        console.log('estado editado:', response);
        // Cerrar la ventana de diálogo solo si la edición se realizó correctamente
        this.dialogRef.close(this.ocupacionSeleccionada);
      } else {
        console.log('No se pudo editar el estado');
      }
    });
    window.location.reload();
    this.dialogRef.close(this.ocupacionSeleccionada);
  }
  cerrarModal(): void {
    this.dialogRef.close();
  }

}
