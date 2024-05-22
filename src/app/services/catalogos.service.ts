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
import { especialidad } from '../models/especialidad.interface';
import { aseguradora } from '../models/aseguradora.interface';
import { medicoEspecialidad } from '../models/medicoEspecialidad.interface';
import { direccion } from '../models/direccion.interface';
import { puesto } from '../models/puesto.interface';
import { contactoEmergencia } from '../models/contactoEmergencia.interface';
import { relacionPaciente } from '../models/relacionPaciente';
import { expediente } from '../models/expediente.interface';
import { fichaPaciente } from '../models/fichaPaciente.interface';
import { medico } from '../models/medico.interface';
import { empleado } from '../models/empleado.interface';
import { agregaryeditarMedico } from '../models/agregaryeditarMedico.interface';
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
    return this.http.get<aseguradora[]>(`${this.baseUrl}catalogos/aseguradora`); 
  }
  editarAseguradora(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/editar-aseguradora`, datos);
  }
  agregarAseguradora(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/nueva-aseguradora`, datos);
  }
    // especialidad
  getEspecialidad() {
    return this.http.get<especialidad[]>(`${this.baseUrl}catalogos/especialidad`); 
  }
  editarEspecialidad(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/editar-especialidad`, datos);
  }
  agregarEspecialidad(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/nueva-especialidad`, datos);
  }
  // medicoEspecialidad
  getMedicoEspecialidad() {
    return this.http.get<medicoEspecialidad[]>(`${this.baseUrl}catalogos/medico-especialidad`); 
  }
  editarMedicoEspecialidad(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/editar-medico-especialidad`, datos);
  }
  agregarMedicoEspecialidad(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/nueva-medico-especialidad`, datos);
  }
  // direccion
  getDireccion() {
    return this.http.get<direccion[]>(`${this.baseUrl}catalogos/direccion`); 
  }
  editarDireccion(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/editar-direccion`, datos);
  }
  agregarDireccion(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/nueva-direccion`, datos);
  }

      // PUESTO
  getPuesto() {
    return this.http.get<puesto[]>(`${this.baseUrl}catalogos/puesto`); 
  }
  editarPuesto(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/editar-puesto`, datos);
  }
  agregarPuesto(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/nuevo-puesto`, datos);
  }
      // RelacionPaciente
    getRelaciones() {
    return this.http.get<relacionPaciente[]>(`${this.baseUrl}catalogos/relacion-paciente`); 
  }
  editarRelacion(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/editar-relacion-paciente`, datos);
  }
  agregarRelacion(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/nueva-relacion-paciente`, datos);
  }  

  // Contacto Emergencia
  getContacto() {
    return this.http.get<contactoEmergencia[]>(`${this.baseUrl}catalogos/contacto-emergencia`); 
  }
  editarContacto(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/editar-contacto-emergencia`, datos);
  }
  agregarContacto(datos: any){
    return this.http.post<any>(`${this.baseUrl}catalogos/nuevo-contacto-emergencia`, datos);
  }

    // Contacto Emergencia
  getExpediente() {
    return this.http.get<expediente[]>(`${this.baseUrl}catalogos/expediente`); 
  }
  getFichaPaciente() {
    return this.http.get<fichaPaciente[]>(`${this.baseUrl}catalogos/ficha-paciente`); 
  }

 //registro de usuarios 
 editarPacienteCompleto(datos: any){
  return this.http.post<any>(`${this.baseUrl}catalogos/editar-ficha-paciente`, datos);
}

  // Medico
  getMedico() {
    return this.http.get<medico[]>(`${this.baseUrl}catalogos/medico`); 
  }
  editMedico(datos: any){
    return this.http.put<any>(`${this.baseUrl}catalogos/editar-medico`, datos);
  }
  agregarMedico(datos: any){
    return this.http.put<any>(`${this.baseUrl}catalogos/nuevo-medico`, datos);
  }
  getMedicoPorID(id: number): Observable<agregaryeditarMedico> {
    return this.http.get<agregaryeditarMedico>(`${this.baseUrl}catalogos/medico-id/${id}`);
  }



   // empleados
   getEmpleados() {
    return this.http.get<empleado[]>(`${this.baseUrl}catalogos/empleados`); 
  }







}
