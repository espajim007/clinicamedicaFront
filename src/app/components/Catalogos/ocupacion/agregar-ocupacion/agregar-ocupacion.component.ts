import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { ocupacion } from 'src/app/models/ocupacion.interface'; 

@Component({
  selector: 'app-agregar-ocupacion',
  templateUrl: './agregar-ocupacion.component.html',
  styleUrls: ['./agregar-ocupacion.component.scss']
})
export class AgregarOcupacionComponent{

  nuevaOcupacion: ocupacion = {
    nombre: ''
  };
  constructor(
    public dialogRef: MatDialogRef<AgregarOcupacionComponent>,
    private catalogosService: CatalogosService
  ) { }

  guardarNuevo(): void {
    this.catalogosService.agregarOcupacion(this.nuevaOcupacion).subscribe(
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
