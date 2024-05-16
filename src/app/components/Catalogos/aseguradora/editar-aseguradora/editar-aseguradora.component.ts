import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { aseguradora } from 'src/app/models/aseguradora.interface'; 

@Component({
  selector: 'app-editar-aseguradora',
  templateUrl: './editar-aseguradora.component.html',
  styleUrls: ['./editar-aseguradora.component.scss']
})
export class EditarAseguradoraComponent implements OnInit {

  constructor(
    private catalogosService: CatalogosService,
    public dialogRef: MatDialogRef<EditarAseguradoraComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public aseguradoraSeleccionada: aseguradora
  ) { }

  ngOnInit(): void {
  }

  guardarCambios(): void {

    this.catalogosService.editarAseguradora(this.aseguradoraSeleccionada).pipe(
      catchError(error => {
        console.error('Error al editar aseguradora:', error);
        return of(null);
      })
    ).subscribe(response => {
      if (response !== null) {
        console.log('aseguradora editada:', response);
        // Cerrar la ventana de diálogo solo si la edición se realizó correctamente
        this.dialogRef.close(this.aseguradoraSeleccionada);
      } else {
        console.log('No se pudo editar');
      }
    });
    window.location.reload();
    this.dialogRef.close(this.aseguradoraSeleccionada);
  }
  cerrarModal(): void {
    this.dialogRef.close();
  }

}
