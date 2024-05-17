import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { municipio } from 'src/app/models/municipio.interface';
import { departamento } from 'src/app/models/departamento.interface';

@Component({
  selector: 'app-municipio',
  templateUrl: './municipio.component.html',
  styleUrls: ['./municipio.component.scss']
})
export class MunicipioComponent implements OnInit {

  municipios: municipio[] = [];
  departamentos: departamento[] = [];
  page: number = 1;

  

  constructor(private catalogosService: CatalogosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.catalogosService.getMunicipio().subscribe(
      (data: municipio[]) => {
        this.municipios = data;
      },
      error => {
        console.error('Error al obtener usuarios:', error);
      }
    );

    this.catalogosService.getDepartamento().subscribe(
      (data: departamento[]) => {
        this.departamentos = data;
      },
      error => {
        console.error('Error al obtener roles:', error);
      }
    );
    
  }
  getDepartamento(id: number): string {
    const dato = this.departamentos.find(dato => dato.id_departamento === id);
    return dato?.nombre ?? '';
  }

}
