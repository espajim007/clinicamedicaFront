import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { ocupacion } from 'src/app/models/ocupacion.interface';
import { EditarOcupacionComponent } from '../editar-ocupacion/editar-ocupacion.component';
import { AgregarOcupacionComponent } from '../agregar-ocupacion/agregar-ocupacion.component';

@Component({
  selector: 'app-ocupacion',
  templateUrl: './ocupacion.component.html',
  styleUrls: ['./ocupacion.component.scss']
})
export class OcupacionComponent implements OnInit {

  ocupaciones: ocupacion[] = [];
  page: number = 1;
  Seleccionado: ocupacion | null = null;
  Backup: ocupacion | null = null; // Variable para guardar la copia de respaldo de los datos
  constructor(private catalogosService: CatalogosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.catalogosService.getOcupacion().subscribe(
      (data: ocupacion[]) => {
        this.ocupaciones = data;
      },
      error => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

  abrirModalEditar(data: ocupacion): void {
    // Guardar una copia de respaldo del usuario seleccionado
    this.Backup = { ...data };
    const dialogRef = this.dialog.open(EditarOcupacionComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.ocupaciones.findIndex(u => u.id_ocupacion === result.id_ocupacion);
        if (index !== -1) {
          this.ocupaciones[index] = result;
        }
      } else {
        // Si se cancela la edición, restaurar la copia de respaldo del usuario
        if (this.Backup) {
          const index = this.ocupaciones.findIndex(u => u.id_ocupacion === this.Backup!.id_ocupacion);
          if (index !== -1) {
            this.ocupaciones[index] = this.Backup;
          }
        }
      }
      // Limpiar la copia de respaldo del usuario
      this.Backup = null;
    });
  }


  abrirModalAgregar(): void {
    this.dialog.open(AgregarOcupacionComponent, {
      width: '400px', // Ajusta el ancho según tus necesidades
      disableClose: true // Opcional, para evitar que el usuario cierre el modal haciendo clic fuera de él
    });
  }
}
