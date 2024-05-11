import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from 'src/app/models/usuario.interface';
import { rol } from 'src/app/models/roles.interface';
import { CatalogosService } from 'src/app/services/catalogos.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.scss']
})
export class EditarUsuarioComponent {
  [x: string]: any;
  usuarioEditado: Usuario;
  usuarioOriginal: Usuario;
  roles: rol[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Usuario,
    public dialogRef: MatDialogRef<EditarUsuarioComponent>,
    private service: CatalogosService
  ) {
    // Crear una copia del usuario original para editar
    this.usuarioEditado = { ...data };
    this.usuarioOriginal = { ...data };
  }

  ngOnInit(): void {
    this.service.getRoles().subscribe(
      (roles: rol[]) => {
        this.roles = roles;
      },
      error => {
        console.error('Error al obtener roles:', error);
      }
    );
    this.usuarioEditado = { ...this.data };
  }

  guardarCambios(): void {
    this.service.editarUsuarios(this.usuarioEditado).subscribe(
      response => {
        console.log('Datos actualizados con éxito:', response);
        this.dialogRef.close(true);
        window.location.reload(); 
      },
      error => {
        console.error('Error al actualizar datos:', error);
        // Maneja el error según sea necesario
      }
    );
    this.dialogRef.close(this.usuarioEditado);
  }

  cerrarModal(): void {
    // Si cierras el modal sin guardar cambios, restaura el usuario original
    this.dialogRef.close(this.usuarioOriginal);
  }
}
