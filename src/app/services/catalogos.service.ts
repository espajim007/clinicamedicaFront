import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { Usuario } from '../models/usuario.interface';
import { rol } from '../models/roles.interface';
@Injectable({
  providedIn: 'root'
})
export class CatalogosService {
  private baseUrl:string = "https://localhost:44304/api/clinicaMedica/"
  constructor(private http : HttpClient) { }

  getUsuarios() {
    return this.http.get<Usuario[]>(`${this.baseUrl}catalogos/usuarios`); 
  }
  getRoles() {
    return this.http.get<rol[]>(`${this.baseUrl}catalogos/roles`); 
  }
  editarUsuarios(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/editar-usuario`, datos);
  }

}
