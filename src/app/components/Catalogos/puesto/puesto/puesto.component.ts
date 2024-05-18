import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { puesto } from 'src/app/models/puesto.interface'; 
import { EditarPuestoComponent } from '../editar-puesto/editar-puesto.component'; 
import { AgregarPuestoComponent } from '../agregar-puesto/agregar-puesto.component'; 
@Component({
  selector: 'app-puesto',
  templateUrl: './puesto.component.html',
  styleUrls: ['./puesto.component.scss']
})
export class PuestoComponent implements OnInit {

  puestos: puesto[] = [];
  page: number = 1;
  PuestoSeleccionado: puesto | null = null;
  Backup: puesto | null = null; // Variable para guardar la copia de respaldo de los datos
  constructor(private catalogosService: CatalogosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.catalogosService.getPuesto().subscribe(
      (data: puesto[]) => {
        this.puestos = data;
      },
      error => {
        console.error('Error al obtener puestos:', error);
      }
    );
  }

  abrirModalEditar(data: puesto): void {
    // Guardar una copia de respaldo del usuario seleccionado
    this.Backup = { ...data };
    const dialogRef = this.dialog.open(EditarPuestoComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.puestos.findIndex(u => u.id_puesto_empleados === result.id_puesto_empleados);
        if (index !== -1) {
          this.puestos[index] = result;
        }
      } else {
        // Si se cancela la edición, restaurar la copia de respaldo del usuario
        if (this.Backup) {
          const index = this.puestos.findIndex(u => u.id_puesto_empleados === this.Backup!.id_puesto_empleados);
          if (index !== -1) {
            this.puestos[index] = this.Backup;
          }
        }
      }
      // Limpiar la copia de respaldo del usuario
      this.Backup = null;
    });
  }


  abrirModalAgregar(): void {
    this.dialog.open(AgregarPuestoComponent, {
      width: '400px', // Ajusta el ancho según tus necesidades
      disableClose: true // Opcional, para evitar que el usuario cierre el modal haciendo clic fuera de él
    });
  }

}
