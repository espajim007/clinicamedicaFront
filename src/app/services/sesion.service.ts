import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  private baseUrl:string = "https://localhost:44304/api/clinicaMedica/"
  constructor(private http : HttpClient) { }

  sesion(credenciales: any){

    return this.http.post<any>(`${this.baseUrl}sesion`, credenciales);
  }
  
  registrarse(datos: any){
    return this.http.post<any>(`${this.baseUrl}registro`, datos);
  }
}
