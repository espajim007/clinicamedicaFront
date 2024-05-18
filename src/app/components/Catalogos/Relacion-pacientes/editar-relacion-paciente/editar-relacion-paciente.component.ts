import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { relacionPaciente } from 'src/app/models/relacionPaciente';

@Component({
  selector: 'app-editar-relacion-paciente',
  templateUrl: './editar-relacion-paciente.component.html',
  styleUrls: ['./editar-relacion-paciente.component.scss']
})
export class EditarRelacionPacienteComponent implements OnInit {

  constructor(
    private catalogosService: CatalogosService,
    public dialogRef: MatDialogRef<EditarRelacionPacienteComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public RelacionSeleccionada: relacionPaciente
  ) { }

  ngOnInit(): void {
  }

  guardarCambios(): void {

    this.catalogosService.editarRelacion(this.RelacionSeleccionada).pipe(
      catchError(error => {
        console.error('Error al editar relacion:', error);
        return of(null);
      })
    ).subscribe(response => {
      if (response !== null) {
        console.log('relacion editada:', response);
        // Cerrar la ventana de diálogo solo si la edición se realizó correctamente
        this.dialogRef.close(this.RelacionSeleccionada);
      } else {
        console.log('No se pudo editar');
      }
    });
    window.location.reload();
    this.dialogRef.close(this.RelacionSeleccionada);
  }
  cerrarModal(): void {
    this.dialogRef.close();
  }


}
