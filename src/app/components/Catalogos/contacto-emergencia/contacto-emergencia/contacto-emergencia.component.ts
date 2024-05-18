import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { contactoEmergencia } from 'src/app/models/contactoEmergencia.interface';
import { relacionPaciente } from 'src/app/models/relacionPaciente';
import { genero } from 'src/app/models/genero.interface';
import { EditarContactoEmergenciaComponent } from '../editar-contacto-emergencia/editar-contacto-emergencia.component';
import { AgregarContactoEmergenciaComponent } from '../agregar-contacto-emergencia/agregar-contacto-emergencia.component';
@Component({
  selector: 'app-contacto-emergencia',
  templateUrl: './contacto-emergencia.component.html',
  styleUrls: ['./contacto-emergencia.component.scss']
})
export class ContactoEmergenciaComponent  {

  contactos: contactoEmergencia[] = [];
  relaciones: relacionPaciente[] = [];
  generos: genero[] = [];
  page: number = 1;
  direccionSeleccionado: contactoEmergencia | null = null;
  Backup: contactoEmergencia | null = null; // Variable para guardar la copia de respaldo del usuario
  

  constructor(private catalogosService: CatalogosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.catalogosService.getContacto().subscribe(
      (data: contactoEmergencia[]) => {
         this.contactos = data;
      },
      error => {
        console.error('Error al obtener contactos:', error);
      }
    );

    this.catalogosService.getRelaciones().subscribe(
      (data: relacionPaciente[]) => {
        this.relaciones = data;
      },
      error => {
        console.error('Error al obtener relaciones:', error);
      }
    );
    this.catalogosService.getGenero().subscribe(
      (data: genero[]) => {
        this.generos = data;
      },
      error => {
        console.error('Error al obtener generos:', error);
      }
    );
  }

  abrirModalEditar(data: contactoEmergencia): void {
    // Guardar una copia de respaldo del usuario seleccionado
    this.Backup = { ...data };
    const dialogRef = this.dialog.open(EditarContactoEmergenciaComponent, {
      width: '400px',
      data: data
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const index = this.contactos.findIndex(u => u.id_contacto_emergencia === result.id_contacto_emergencia);
        if (index !== -1) {
          this.contactos[index] = result;
        }
      } else {
        // Si se cancela la edición, restaurar la copia de respaldo del usuario
        if (this.Backup) {
          const index = this.contactos.findIndex(u => u.id_contacto_emergencia === this.Backup!.id_contacto_emergencia);
          if (index !== -1) {
            this.contactos[index] = this.Backup;
          }
        }
      }
      // Limpiar la copia de respaldo del usuario
      this.Backup = null;
    });
  }

  getRelaciones(id: number): string {
    const dato = this.relaciones.find(dato => dato.id_relacion_paciente === id);
    return dato?.relacion ?? '';
  }
  GetGeneros(id: number): string {
    const dato = this.generos.find(dato => dato.idgenero === id);
    return dato?.genero ?? '';
  }

}
