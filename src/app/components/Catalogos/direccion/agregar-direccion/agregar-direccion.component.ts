import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { direccion } from 'src/app/models/direccion.interface'; 
import { municipio } from 'src/app/models/municipio.interface';
@Component({
  selector: 'app-agregar-direccion',
  templateUrl: './agregar-direccion.component.html',
  styleUrls: ['./agregar-direccion.component.scss']
})
export class AgregarDireccionComponent {
  nuevaDireccion: direccion = {
    id_municipio: 1,
    calle: '',
    avenida: '',
    zona_barrio:'', 
    residencial_colonia:'',
    numero_vivienda:'', 
    indicacion_extra:' ',  
  };
  municipios: municipio[] = [];

  constructor(
    public dialogRef: MatDialogRef<AgregarDireccionComponent>,
    private catalogosService: CatalogosService
  ) {
    this.catalogosService.getMunicipio().subscribe(data => {
      this.municipios = data;
    });
  }

  guardarNuevo(): void {
    console.log(this.nuevaDireccion);
    this.catalogosService.agregarDireccion(this.nuevaDireccion).subscribe(
      () => {
        // Si se agrega el usuario exitosamente, cerrar el modal
        this.dialogRef.close();
      },
      error => {
        // Si ocurre un error al agregar el usuario, mostrar una alerta con el mensaje de error
        alert('Error al agregar el usuario: ' + error.error);
      }
    );
    window.location.reload();
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }
}
