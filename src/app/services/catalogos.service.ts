import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import { Usuario } from '../models/usuario.interface';
import { rol } from '../models/roles.interface';
import { Observable } from 'rxjs';
import { estadoCivil } from '../models/estadoCivil.interface';
import { estadoCita } from '../models/estadoCita.interface';
import { genero } from '../models/genero.interface';
import { ocupacion } from '../models/ocupacion.interface';
import { tipoSangre } from '../models/tipoSangre.interface';
import { departamento } from '../models/departamento.interface';
import { municipio } from '../models/municipio.interface';
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
  canbiarEstadoUsuario(idUsuario: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}catalogos/cambio-estado-usuario/${idUsuario}`);
  }

  // CATALOGOS PARA CITA
  //Estado Cita
  getEstadoCita() {
    return this.http.get<estadoCita[]>(`${this.baseUrl}catalogos/estado-cita`); 
  }
  editarEstadoCita(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/editar-estado-cita`, datos);
  }
  agregarEstadoCita(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/nueva-estado-cita`, datos);
  }
  //Estado Civil
  getEstadoCivil() {
    return this.http.get<estadoCivil[]>(`${this.baseUrl}catalogos/estado-civil`); 
  }
  editarEstadoCivil(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/editar-estado-civil`, datos);
  }
  agregarEstadoCivil(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/nueva-estado-civil`, datos);
  }
  //Genero
  getGenero() {
    return this.http.get<genero[]>(`${this.baseUrl}catalogos/genero`); 
  }
  // ocupacion
  getOcupacion() {
    return this.http.get<ocupacion[]>(`${this.baseUrl}catalogos/ocupacion`); 
  }
  editarOcupacion(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/editar-ocupacion`, datos);
  }
  agregarOcupacion(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/nueva-ocupacion`, datos);
  }
  // TipoSangre
  getTipoSangre() {
    return this.http.get<tipoSangre[]>(`${this.baseUrl}catalogos/tipo-sangre`); 
  }
  // Departamento
  getDepartamento() {
    return this.http.get<departamento[]>(`${this.baseUrl}catalogos/departamento`); 
  }
  // Municipio
  getMunicipio() {
    return this.http.get<municipio[]>(`${this.baseUrl}catalogos/municipio`); 
  }
  // aseguradora
  getAseguradora() {
    return this.http.get<ocupacion[]>(`${this.baseUrl}catalogos/aseguradora`); 
  }
  editarAseguradora(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/editar-aseguradora`, datos);
  }
  agregarAseguradora(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/nueva-aseguradora`, datos);
  }
    // especialidad
  getEspecialidad() {
    return this.http.get<ocupacion[]>(`${this.baseUrl}catalogos/especialidad`); 
  }
  editarEspecialidad(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/editar-especialidad`, datos);
  }
  agregarEspecialidad(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/nueva-especialidad`, datos);
  }

}
