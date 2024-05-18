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

  // contactos: contactoEmergencia[] = [];
  // relaciones: relacionPaciente[] = [];
  // genero: genero[] = [];
  // page: number = 1;
  // direccionSeleccionado: direccion | null = null;
  // Backup: direccion | null = null; // Variable para guardar la copia de respaldo del usuario
  

  constructor(private catalogosService: CatalogosService, private dialog: MatDialog) { }

  // ngOnInit(): void {
  //   this.catalogosService.getDireccion().subscribe(
  //     (data: direccion[]) => {
  // //       this.direcciones = data;
  //     },
  //     error => {
  //       console.error('Error al obtener direcciones:', error);
  //     }
  //   );

  //   this.catalogosService.getMunicipio().subscribe(
  //     (data: municipio[]) => {
  //       this.municipios = data;
  //     },
  //     error => {
  //       console.error('Error al obtener municipios:', error);
  //     }
  //   );
  // }

  // abrirModalEditar(data: direccion): void {
  //   // Guardar una copia de respaldo del usuario seleccionado
  //   this.Backup = { ...data };
  //   const dialogRef = this.dialog.open(EditarContactoEmergenciaComponent, {
  //     width: '400px',
  //     data: data
  //   });

  //   dialogRef.afterClosed().subscribe(result => {
  //     if (result) {
  //       const index = this.direcciones.findIndex(u => u.id_direccion === result.id_direccion);
  //       if (index !== -1) {
  //         this.direcciones[index] = result;
  //       }
  //     } else {
  //       // Si se cancela la edición, restaurar la copia de respaldo del usuario
  //       if (this.Backup) {
  //         const index = this.direcciones.findIndex(u => u.id_direccion === this.Backup!.id_direccion);
  //         if (index !== -1) {
  //           this.direcciones[index] = this.Backup;
  //         }
  //       }
  //     }
  //     // Limpiar la copia de respaldo del usuario
  //     this.Backup = null;
  //   });
  // }

  // getMunicipio(id: number): string {
  //   const dato = this.municipios.find(dato => dato.id_municipio === id);
  //   return dato?.nombre ?? '';
  // }

  // abrirModalAgregar(): void {
  //   this.dialog.open(AgregarContactoEmergenciaComponent, {
  //     width: '400px', // Ajusta el ancho según tus necesidades
  //     disableClose: true // Opcional, para evitar que el usuario cierre el modal haciendo clic fuera de él
  //   });
  // }

}
