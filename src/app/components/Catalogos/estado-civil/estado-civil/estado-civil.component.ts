import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { estadoCivil } from 'src/app/models/estadoCivil.interface';
import { EditarEstadoCivilComponent } from '../editar-estado-civil/editar-estado-civil.component'; 
import { AgregarEstadoCivilComponent } from '../agregar-estado-civil/agregar-estado-civil.component';

@Component({
  selector: 'app-estado-civil',
  templateUrl: './estado-civil.component.html',
  styleUrls: ['./estado-civil.component.scss']
})
export class EstadoCivilComponent implements OnInit {
  estados: estadoCivil[] = [];
  page: number = 1;
  Seleccionado: estadoCivil | null = null;
  Backup: estadoCivil | null = null; // Variable para guardar la copia de respaldo de los datos
  constructor(private catalogosService: CatalogosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.catalogosService.getEstadoCivil().subscribe(
      (data: estadoCivil[]) => {
        this.estados = data;
      },
      error => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }


  abrirModalEditar(data: estadoCivil): void {
    // Guardar una copia de respaldo del usuario seleccionado
    this.Backup = { ...data };
    const dialogRef = this.dialog.open(EditarEstadoCivilComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.estados.findIndex(u => u.id_estado_civil === result.id_estado_civil);
        if (index !== -1) {
          this.estados[index] = result;
        }
      } else {
        // Si se cancela la edición, restaurar la copia de respaldo del usuario
        if (this.Backup) {
          const index = this.estados.findIndex(u => u.id_estado_civil === this.Backup!.id_estado_civil);
          if (index !== -1) {
            this.estados[index] = this.Backup;
          }
        }
      }
      // Limpiar la copia de respaldo del usuario
      this.Backup = null;
    });
  }


  abrirModalAgregar(): void {
    this.dialog.open(AgregarEstadoCivilComponent, {
      width: '400px', // Ajusta el ancho según tus necesidades
      disableClose: true // Opcional, para evitar que el usuario cierre el modal haciendo clic fuera de él
    });
  }

}
