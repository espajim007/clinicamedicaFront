import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { especialidad } from 'src/app/models/especialidad.interface';

@Component({
  selector: 'app-editar-especialidad',
  templateUrl: './editar-especialidad.component.html',
  styleUrls: ['./editar-especialidad.component.scss']
})
export class EditarEspecialidadComponent implements OnInit {

  constructor(
    private catalogosService: CatalogosService,
    public dialogRef: MatDialogRef<EditarEspecialidadComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public especialidadSelecionada: especialidad
  ) { }

  ngOnInit(): void {
  }

  guardarCambios(): void {

    this.catalogosService.editarEspecialidad(this.especialidadSelecionada).pipe(
      catchError(error => {
        console.error('Error al editar especialidad:', error);
        return of(null);
      })
    ).subscribe(response => {
      if (response !== null) {
        console.log('especialidad editado:', response);
        // Cerrar la ventana de diálogo solo si la edición se realizó correctamente
        this.dialogRef.close(this.especialidadSelecionada);
      } else {
        console.log('No se pudo editar la especialidad');
      }
    });
    window.location.reload();
    this.dialogRef.close(this.especialidadSelecionada);
  }
  cerrarModal(): void {
    this.dialogRef.close();
  }

}
