import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  tipo: string = "password";
  esTexto: boolean = false;
  icono: string = "fa-eye-slash";
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private service: SesionService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      correo: ['',Validators.required],
      contrasenia: ['',Validators.required]
    })
  }

  mostrarContra(){
    this.esTexto = !this.esTexto;
    this.esTexto ? this.icono = "fa-eye": this.icono = "fa-eye-slash";
    this.esTexto ? this.tipo = "text": this.tipo = "password";
  }

  onSubmit(){
    if (this.loginForm.valid) {
      this.service.sesion(this.loginForm.value).subscribe({
        next: (res) => {
          this.loginForm.reset();
          this.router.navigate(['menu']);
        },
        error: (err) => {
          console.error(err); // Mostrar el error en la consola del navegador
          if (err.error && err.error.message) {
            alert('Advertencia: ' + err.error.message); 
          } else {
            alert('Credenciales no existen'); 
          }
        }
      });
    } else {
      alert('Formulario inválido'); // Alerta de formulario inválido
    }


  }
}
