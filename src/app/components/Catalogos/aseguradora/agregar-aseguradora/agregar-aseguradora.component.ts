import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { aseguradora } from 'src/app/models/aseguradora.interface'; 

@Component({
  selector: 'app-agregar-aseguradora',
  templateUrl: './agregar-aseguradora.component.html',
  styleUrls: ['./agregar-aseguradora.component.scss']
})
export class AgregarAseguradoraComponent {
  nuevaAseguradora: aseguradora = {
    nombre: '',
    copago: 0,
    telefono: 0,
    correo: ''
  };
  constructor(
    public dialogRef: MatDialogRef<AgregarAseguradoraComponent>,
    private catalogosService: CatalogosService
  ) { }

  guardarNuevo(): void {
    this.catalogosService.agregarAseguradora(this.nuevaAseguradora).subscribe(
      () => {
        // Si se agrega el usuario exitosamente, cerrar el modal
        this.dialogRef.close();
      },
      error => {
        // Si ocurre un error al agregar el usuario, mostrar una alerta con el mensaje de error
        alert('Error al agregar aseguradora: ' + error.error);
      }
    );
    window.location.reload();
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }
}
