import { Component, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { rol } from 'src/app/models/roles.interface';
import { Usuario } from 'src/app/models/usuario.interface'; 
@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.scss']
})
export class AgregarUsuarioComponent {
  nuevoUsuario: Usuario = {
    nombre: '',
    email: '',
    contrasenia: '',
    id_rol: 2, 
    estado: true 
  };
  roles: rol[] = [];

  constructor(
    public dialogRef: MatDialogRef<AgregarUsuarioComponent>,
    private catalogosService: CatalogosService
  ) {
    this.catalogosService.getRoles().subscribe(roles => {
      this.roles = roles;
    });
  }

  guardarNuevoUsuario(): void {
    console.log(this.nuevoUsuario);
    this.catalogosService.agregarUsuarios(this.nuevoUsuario).subscribe(
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
