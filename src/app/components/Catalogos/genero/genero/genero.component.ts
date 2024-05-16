import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { genero } from 'src/app/models/genero.interface';

@Component({
  selector: 'app-genero',
  templateUrl: './genero.component.html',
  styleUrls: ['./genero.component.scss']
})
export class GeneroComponent implements OnInit {

  generos: genero[] = [];
  page: number = 1;
  constructor(private catalogosService: CatalogosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.catalogosService.getGenero().subscribe(
      (data: genero[]) => {
        this.generos = data;
      },
      error => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

}
