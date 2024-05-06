import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';


const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Ruta predeterminada
  {path:'login', component: LoginComponent},
  {path:'inicio', component: InicioComponent},
  {path:'registrarse', component: RegistrarseComponent},
  {path:'prueba', component: PruebaComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
