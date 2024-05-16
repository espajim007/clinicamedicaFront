import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { estadoCivil } from 'src/app/models/estadoCivil.interface';

@Component({
  selector: 'app-agregar-estado-civil',
  templateUrl: './agregar-estado-civil.component.html',
  styleUrls: ['./agregar-estado-civil.component.scss']
})
export class AgregarEstadoCivilComponent  {
  nuevoEstado: estadoCivil = {
    nombre: ''
  };
  constructor(
    public dialogRef: MatDialogRef<AgregarEstadoCivilComponent>,
    private catalogosService: CatalogosService
  ) { }

  guardarNuevo(): void {
    this.catalogosService.agregarEstadoCivil(this.nuevoEstado).subscribe(
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
