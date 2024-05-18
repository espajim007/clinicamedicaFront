import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { direccion } from 'src/app/models/direccion.interface';
import { municipio } from 'src/app/models/municipio.interface'; 
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editar-direccion',
  templateUrl: './editar-direccion.component.html',
  styleUrls: ['./editar-direccion.component.scss']
})
export class EditarDireccionComponent implements OnInit {

  municipios: municipio[] = [];

  constructor(
    private catalogosService: CatalogosService,
    public dialogRef: MatDialogRef<EditarDireccionComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public direccionSelecionada: direccion
  ) { }

  ngOnInit(): void {
    this.catalogosService.getMunicipio().subscribe(
      (data: municipio[]) => {
        this.municipios = data;
      },
      error => {
        console.error('Error al obtener roles:', error);
      }
    );
  }

  
  guardarCambios(): void {

    console.log(this.direccionSelecionada);
    this.catalogosService.editarDireccion(this.direccionSelecionada).pipe(
      catchError(error => {
        console.error('Error al editar direccion:', error);
        return of(null);
      })
    ).subscribe(response => {
      if (response !== null) {
        console.log('direccion Editada:', response);
        // Cerrar la ventana de diálogo solo si la edición se realizó correctamente
        this.dialogRef.close(this.direccionSelecionada);
      } else {
        console.log('No se pudo editar el usuario');
      }
    });
    window.location.reload();
    this.dialogRef.close(this.direccionSelecionada);
  }
    


  cerrarModal(): void {
    this.dialogRef.close();
  }

}
