import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { Usuario } from '../models/usuario.interface';
import { rol } from '../models/roles.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CatalogosService {
  private baseUrl:string = "https://localhost:44304/api/clinicaMedica/"
  constructor(private http : HttpClient) { }

  getUsuarios() {
    return this.http.get<Usuario[]>(`${this.baseUrl}catalogos/usuarios`); 
  }
  editarUsuarios(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/editar-usuario`, datos);
  }
  agregarUsuarios(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/nuevo-usuario`, datos);
  }

  getRoles() {
    return this.http.get<rol[]>(`${this.baseUrl}catalogos/roles`); 
  }
  

  borrarUsuario(idUsuario: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}catalogos/eliminar-usuario/${idUsuario}`);
  }
}
