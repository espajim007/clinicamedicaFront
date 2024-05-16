import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { departamento } from 'src/app/models/departamento.interface';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.scss']
})
export class DepartamentoComponent implements OnInit {

  departamentos: departamento[] = [];
  page: number = 1;
  constructor(private catalogosService: CatalogosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.catalogosService.getDepartamento().subscribe(
      (data: departamento[]) => {
        this.departamentos = data;
      },
      error => {
        console.error('Error al obtener departamentos:', error);
      }
    );
  }
}
