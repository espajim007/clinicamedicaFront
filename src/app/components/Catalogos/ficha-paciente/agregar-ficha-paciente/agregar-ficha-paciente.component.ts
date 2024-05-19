import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CatalogosService } from 'src/app/services/catalogos.service';



@Component({
  selector: 'app-agregar-ficha-paciente',
  templateUrl: './agregar-ficha-paciente.component.html',
  styleUrls: ['./agregar-ficha-paciente.component.scss']
})
export class AgregarFichaPacienteComponent implements OnInit {


  constructor(private catalogosService: CatalogosService, private dialog: MatDialog) { }

  ngOnInit(): void {

  }


}
