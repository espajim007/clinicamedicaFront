import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { UsuariosComponent } from './components/Catalogos/usuarios/usuarios.component';
import { MenuCatalogosComponent } from './components/Catalogos/menu-catalogos/menu-catalogos.component';
import { MainLayotComponent } from './components/main-layot/main-layot.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PruebaComponent,
    LoginComponent,
    RegistrarseComponent,
    MenuComponent,
    UsuariosComponent,
    MenuCatalogosComponent,
    MainLayotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
