import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';
import { tipoSangre } from 'src/app/models/tipoSangre.interface';

@Component({
  selector: 'app-tipo-sangre',
  templateUrl: './tipo-sangre.component.html',
  styleUrls: ['./tipo-sangre.component.scss']
})
export class TipoSangreComponent implements OnInit {

  tipos: tipoSangre[] = [];
  page: number = 1;
  constructor(private catalogosService: CatalogosService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.catalogosService.getTipoSangre().subscribe(
      (data: tipoSangre[]) => {
        this.tipos = data;
      },
      error => {
        console.error('Error al obtener usuarios:', error);
      }
    );
  }

}
