import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { Usuario } from 'src/app/models/usuario.interface';
import { rol } from 'src/app/models/roles.interface'; 
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent implements OnInit {

  roles: rol[] = [];

  constructor(
    private catalogosService: CatalogosService,
    public dialogRef: MatDialogRef<EditarUsuarioComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public usuarioSeleccionado: Usuario
  ) { }

  ngOnInit(): void {
    this.catalogosService.getRoles().subscribe(
      (data: rol[]) => {
        this.roles = data;
      },
      error => {
        console.error('Error al obtener roles:', error);
      }
    );
  }

  
  guardarCambios(): void {

    console.log(this.usuarioSeleccionado);
    this.catalogosService.editarUsuarios(this.usuarioSeleccionado).pipe(
      catchError(error => {
        console.error('Error al editar usuario:', error);
        return of(null);
      })
    ).subscribe(response => {
      if (response !== null) {
        console.log('Usuario editado:', response);
        // Cerrar la ventana de diálogo solo si la edición se realizó correctamente
        this.dialogRef.close(this.usuarioSeleccionado);
      } else {
        console.log('No se pudo editar el usuario');
      }
    });
    window.location.reload();
    this.dialogRef.close(this.usuarioSeleccionado);
  }
    

  borrarUsuario(): void {
  // Verificar si usuarioSeleccionado.id_usuario no es undefined
  if (this.usuarioSeleccionado.id_usuario !== undefined) {
    const confirmacion = confirm('¿Estás seguro de que deseas cambiar el estado de este usuario?');
    if (confirmacion) {
      // Llamar a la función borrarUsuario del servicio con el ID del usuario
      this.catalogosService.canbiarEstadoUsuario(this.usuarioSeleccionado.id_usuario).subscribe(
        response => {
          console.log('Usuario eliminado:', response);
        },
        error => {
          console.error('Error al eliminar usuario:', error);
        }
      );
    }
  } else {
    console.error('ID de usuario indefinido');
  }
  window.location.reload();
  this.dialogRef.close(this.usuarioSeleccionado);}

}
