import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
import { cita } from 'src/app/models/cita.interface';
import { estadoCita } from 'src/app/models/estadoCita.interface';
import { fichaPaciente } from 'src/app/models/fichaPaciente.interface';

@Component({
  selector: 'app-editar-cita',
  templateUrl: './editar-cita.component.html',
  styleUrls: ['./editar-cita.component.scss']
})
export class EditarCitaComponent implements OnInit {
  estados: estadoCita[] = [];
  pacientes: fichaPaciente[] = [];

  constructor(
    private catalogosService: CatalogosService,
    public dialogRef: MatDialogRef<EditarCitaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: cita 
  ) {
  }

  ngOnInit(): void {
    this.catalogosService.getEstadoCita().subscribe(
      (data: estadoCita[]) => {
        this.estados = data;
      },
      error => {
        console.error('Error al obtener estados:', error);
      }
    );
    this.catalogosService.getFichaPaciente().subscribe(
      (data: fichaPaciente[]) => {
        this.pacientes = data;
      },
      error => {
        console.error('Error al obtener pacientes:', error);
      }
    );
  }

  guardarCambios(): void {
    this.catalogosService.editarCita(this.data).pipe(
      catchError(error => {
        console.error('Error al editar cita:', error);
        return of(null);
      })
    ).subscribe(response => {
      if (response !== null) {
        console.log('Cita editada:', response);
        // Cerrar la ventana de diálogo solo si la edición se realizó correctamente
        this.dialogRef.close(this.data);
      } else {
        console.log('No se pudo editar la cita');
      }
    });
    window.location.reload();
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }
}
