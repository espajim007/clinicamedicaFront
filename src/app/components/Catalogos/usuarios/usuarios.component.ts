import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { Usuario } from 'src/app/models/usuario.interface';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';
import { rol } from 'src/app/models/roles.interface';
import { AgregarUsuarioComponent } from '../agregar-usuario/agregar-usuario.component'; 

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  roles: rol[] = [];
  page: number = 1;
  usuarioSeleccionado: Usuario | null = null;
  usuarioBackup: Usuario | null = null; // Variable para guardar la copia de respaldo del usuario
  

  constructor(private catalogosService: CatalogosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.catalogosService.getUsuarios().subscribe(
      (data: Usuario[]) => {
        this.usuarios = data;
      },
      error => {
        console.error('Error al obtener usuarios:', error);
      }
    );

    this.catalogosService.getRoles().subscribe(
      (data: rol[]) => {
        this.roles = data;
      },
      error => {
        console.error('Error al obtener roles:', error);
      }
    );
  }

  abrirModalEditar(usuario: Usuario): void {
    // Guardar una copia de respaldo del usuario seleccionado
    this.usuarioBackup = { ...usuario };
    const dialogRef = this.dialog.open(EditarUsuarioComponent, {
      width: '400px',
      data: usuario
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.usuarios.findIndex(u => u.id_usuario === result.id_usuario);
        if (index !== -1) {
          this.usuarios[index] = result;
        }
      } else {
        // Si se cancela la edición, restaurar la copia de respaldo del usuario
        if (this.usuarioBackup) {
          const index = this.usuarios.findIndex(u => u.id_usuario === this.usuarioBackup!.id_usuario);
          if (index !== -1) {
            this.usuarios[index] = this.usuarioBackup;
          }
        }
      }
      // Limpiar la copia de respaldo del usuario
      this.usuarioBackup = null;
    });
  }

  getRolNombre(idRol: number): string {
    const rol = this.roles.find(rol => rol.id_rol === idRol);
    return rol ? rol.nombre : 'Sin rol'; 
  }

  abrirModalAgregarUsuario(): void {
    this.dialog.open(AgregarUsuarioComponent, {
      width: '400px', // Ajusta el ancho según tus necesidades
      disableClose: true // Opcional, para evitar que el usuario cierre el modal haciendo clic fuera de él
    });
  }

}
