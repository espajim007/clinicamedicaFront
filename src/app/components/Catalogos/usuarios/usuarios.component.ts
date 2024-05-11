import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { Usuario } from 'src/app/models/usuario.interface';
import { EditarUsuarioComponent } from '../editar-usuario/editar-usuario.component';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  page: number = 1;
  usuarioSeleccionado: Usuario | null = null; 
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
  }

  // Método para abrir el modal de edición
  abrirModalEditar(usuario: Usuario): void {
    const dialogRef = this.dialog.open(EditarUsuarioComponent, {
      width: '400px', // Ajusta el ancho según tus necesidades
      data: usuario // Pasa los datos del usuario al modal
    });

    // Escucha el evento de cierre del modal
    dialogRef.afterClosed().subscribe(result => {
      // Actualiza los datos del usuario si se guardaron cambios
      if (result) {
        // Encuentra el índice del usuario en el arreglo
        const index = this.usuarios.findIndex(u => u.id_usuario === result.id_usuario);
        // Actualiza los datos del usuario en el arreglo
        if (index !== -1) {
          this.usuarios[index] = result;
        }
      }
    });
  }


}
