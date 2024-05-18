import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { relacionPaciente } from 'src/app/models/relacionPaciente';
import { EditarRelacionPacienteComponent } from '../editar-relacion-paciente/editar-relacion-paciente.component'; 
import { AgregarRelacionPacienteComponent } from '../agregar-relacion-paciente/agregar-relacion-paciente.component'; 
@Component({
  selector: 'app-relacion-paciente',
  templateUrl: './relacion-paciente.component.html',
  styleUrls: ['./relacion-paciente.component.scss']
})
export class RelacionPacienteComponent implements OnInit {

  relaciones: relacionPaciente[] = [];
  page: number = 1;
  Seleccionado: relacionPaciente | null = null;
  Backup: relacionPaciente | null = null; // Variable para guardar la copia de respaldo de los datos
  constructor(private catalogosService: CatalogosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.catalogosService.getRelaciones().subscribe(
      (data: relacionPaciente[]) => {
        this.relaciones = data;
      },
      error => {
        console.error('Error al obtener aseguradoras:', error);
      }
    );
  }

  abrirModalEditar(data: relacionPaciente): void {
    // Guardar una copia de respaldo del usuario seleccionado
    this.Backup = { ...data };
    const dialogRef = this.dialog.open(EditarRelacionPacienteComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.relaciones.findIndex(u => u.id_relacion_paciente === result.id_aseguradora);
        if (index !== -1) {
          this.relaciones[index] = result;
        }
      } else {
        // Si se cancela la edición, restaurar la copia de respaldo del usuario
        if (this.Backup) {
          const index = this.relaciones.findIndex(u => u.id_relacion_paciente === this.Backup!.id_relacion_paciente);
          if (index !== -1) {
            this.relaciones[index] = this.Backup;
          }
        }
      }
      // Limpiar la copia de respaldo del usuario
      this.Backup = null;
    });
  }


  abrirModalAgregar(): void {
    this.dialog.open(AgregarRelacionPacienteComponent, {
      width: '400px', // Ajusta el ancho según tus necesidades
      disableClose: true // Opcional, para evitar que el usuario cierre el modal haciendo clic fuera de él
    });
  }


}
