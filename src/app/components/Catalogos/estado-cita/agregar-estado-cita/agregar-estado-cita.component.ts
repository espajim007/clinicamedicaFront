import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { estadoCita } from 'src/app/models/estadoCita.interface'; 

@Component({
  selector: 'app-agregar-estado-cita',
  templateUrl: './agregar-estado-cita.component.html',
  styleUrls: ['./agregar-estado-cita.component.scss']
})
export class AgregarEstadoCitaComponent {
  nuevoEstado: estadoCita = {
    nombre: ''  
  };
  constructor(
    public dialogRef: MatDialogRef<AgregarEstadoCitaComponent>,
    private catalogosService: CatalogosService
  ) { }

  guardarNuevo(): void {
    this.catalogosService.agregarEstadoCita(this.nuevoEstado).subscribe(
      () => {
        // Si se agrega el usuario exitosamente, cerrar el modal
        this.dialogRef.close();
      },
      error => {
        // Si ocurre un error al agregar el usuario, mostrar una alerta con el mensaje de error
        alert('Error al agregar el registro: ' + error.error);
      }
    );
    window.location.reload();
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }

}
