import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { puesto } from 'src/app/models/puesto.interface';

@Component({
  selector: 'app-editar-puesto',
  templateUrl: './editar-puesto.component.html',
  styleUrls: ['./editar-puesto.component.scss']
})
export class EditarPuestoComponent implements OnInit {

  constructor(
    private catalogosService: CatalogosService,
    public dialogRef: MatDialogRef<EditarPuestoComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public puestoSeleccionado: puesto
  ) { }

  ngOnInit(): void {
  }

  guardarCambios(): void {

    this.catalogosService.editarPuesto(this.puestoSeleccionado).pipe(
      catchError(error => {
        console.error('Error al editar puesto:', error);
        return of(null);
      })
    ).subscribe(response => {
      if (response !== null) {
        console.log('puesto editada:', response);
        // Cerrar la ventana de diálogo solo si la edición se realizó correctamente
        this.dialogRef.close(this.puestoSeleccionado);
      } else {
        console.log('No se pudo editar');
      }
    });
    window.location.reload();
    this.dialogRef.close(this.puestoSeleccionado);
  }
  cerrarModal(): void {
    this.dialogRef.close();
  }


}
