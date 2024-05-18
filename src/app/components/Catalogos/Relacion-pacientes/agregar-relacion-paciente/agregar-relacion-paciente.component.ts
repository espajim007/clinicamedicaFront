import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { relacionPaciente } from 'src/app/models/relacionPaciente'; 

@Component({
  selector: 'app-agregar-relacion-paciente',
  templateUrl: './agregar-relacion-paciente.component.html',
  styleUrls: ['./agregar-relacion-paciente.component.scss']
})
export class AgregarRelacionPacienteComponent  {

  nuevaRelacion: relacionPaciente = {
    relacion: ''
  };
  constructor(
    public dialogRef: MatDialogRef<AgregarRelacionPacienteComponent>,
    private catalogosService: CatalogosService
  ) { }

  guardarNuevo(): void {
    this.catalogosService.agregarRelacion(this.nuevaRelacion).subscribe(
      () => {
        // Si se agrega el usuario exitosamente, cerrar el modal
        this.dialogRef.close();
      },
      error => {
        // Si ocurre un error al agregar el usuario, mostrar una alerta con el mensaje de error
        alert('Error al agregar : ' + error.error);
      }
    );
    window.location.reload();
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }

}
