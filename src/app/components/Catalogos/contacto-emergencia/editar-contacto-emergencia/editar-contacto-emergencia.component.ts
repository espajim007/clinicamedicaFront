import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { contactoEmergencia } from 'src/app/models/contactoEmergencia.interface'; 
import { relacionPaciente } from 'src/app/models/relacionPaciente'; 
import { genero } from 'src/app/models/genero.interface'; 
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editar-contacto-emergencia',
  templateUrl: './editar-contacto-emergencia.component.html',
  styleUrls: ['./editar-contacto-emergencia.component.scss']
})
export class EditarContactoEmergenciaComponent implements OnInit {

  relaciones: relacionPaciente[] = [];
  generos: genero[] = [];

  constructor(
    private catalogosService: CatalogosService,
    public dialogRef: MatDialogRef<EditarContactoEmergenciaComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public ContactoSelecionado: contactoEmergencia
  ) { }

  ngOnInit(): void {
    this.catalogosService.getRelaciones().subscribe(
      (data: relacionPaciente[]) => {
        this.relaciones = data;
      },
      error => {
        console.error('Error al obtener relaciones:', error);
      }
    );
    this.catalogosService.getGenero().subscribe(
      (data: genero[]) => {
        this.generos = data;
      },
      error => {
        console.error('Error al obtener generos:', error);
      }
    );
  }

  
  guardarCambios(): void {

    console.log(this.ContactoSelecionado);
    this.catalogosService.editarContacto(this.ContactoSelecionado).pipe(
      catchError(error => {
        console.error('Error al editar contacto:', error);
        return of(null);
      })
    ).subscribe(response => {
      if (response !== null) {
        console.log('contacto Editada:', response);
        // Cerrar la ventana de diálogo solo si la edición se realizó correctamente
        this.dialogRef.close(this.ContactoSelecionado);
      } else {
        console.log('No se pudo editar el usuario');
      }
    });
    window.location.reload();
    this.dialogRef.close(this.ContactoSelecionado);
  }
    


  cerrarModal(): void {
    this.dialogRef.close();
  }

}
