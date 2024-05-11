import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/services/sesion.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit {

  tipo: string = "password";
  esTexto: boolean = false;
  icono: string = "fa-eye-slash";
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private service: SesionService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      contrasenia: ['',Validators.required],
      email: ['',Validators.required],
      nombre: ['',Validators.required]
    })
  }

  mostrarContra(){
    this.esTexto = !this.esTexto;
    this.esTexto ? this.icono = "fa-eye": this.icono = "fa-eye-slash";
    this.esTexto ? this.tipo = "text": this.tipo = "password";
  }

  onSubmit(){
    if (this.loginForm.valid) {
      this.service.registrarse(this.loginForm.value).subscribe({
        next: (res) => {
          this.loginForm.reset();
          alert("Usuario Registrado Exitosamente"); 
        },
        error: (err) => {
          console.error(err); // Mostrar el error en la consola del navegador
          if (err.error && err.error.message) {
            alert('Advertencia: ' + err.error.message); 
          }
        }
      });
    } else {
      alert('Formulario inválido'); // Alerta de formulario inválido
    }


  }
}
