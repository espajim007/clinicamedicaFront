import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { aseguradora } from 'src/app/models/aseguradora.interface';
import { EditarAseguradoraComponent } from '../editar-aseguradora/editar-aseguradora.component';
import { AgregarAseguradoraComponent } from '../agregar-aseguradora/agregar-aseguradora.component';

@Component({
  selector: 'app-aseguradora',
  templateUrl: './aseguradora.component.html',
  styleUrls: ['./aseguradora.component.scss']
})
export class AseguradoraComponent implements OnInit {

  aseguradoras: aseguradora[] = [];
  page: number = 1;
  Seleccionado: aseguradora | null = null;
  Backup: aseguradora | null = null; // Variable para guardar la copia de respaldo de los datos
  constructor(private catalogosService: CatalogosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.catalogosService.getAseguradora().subscribe(
      (data: aseguradora[]) => {
        this.aseguradoras = data;
      },
      error => {
        console.error('Error al obtener aseguradoras:', error);
      }
    );
  }

  abrirModalEditar(data: aseguradora): void {
    // Guardar una copia de respaldo del usuario seleccionado
    this.Backup = { ...data };
    const dialogRef = this.dialog.open(EditarAseguradoraComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.aseguradoras.findIndex(u => u.id_aseguradora === result.id_aseguradora);
        if (index !== -1) {
          this.aseguradoras[index] = result;
        }
      } else {
        // Si se cancela la edición, restaurar la copia de respaldo del usuario
        if (this.Backup) {
          const index = this.aseguradoras.findIndex(u => u.id_aseguradora === this.Backup!.id_aseguradora);
          if (index !== -1) {
            this.aseguradoras[index] = this.Backup;
          }
        }
      }
      // Limpiar la copia de respaldo del usuario
      this.Backup = null;
    });
  }


  abrirModalAgregar(): void {
    this.dialog.open(AgregarAseguradoraComponent, {
      width: '400px', // Ajusta el ancho según tus necesidades
      disableClose: true // Opcional, para evitar que el usuario cierre el modal haciendo clic fuera de él
    });
  }

}
