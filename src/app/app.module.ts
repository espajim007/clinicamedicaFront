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
import { NgxPaginationModule } from 'ngx-pagination';
import { EditarUsuarioComponent } from './components/Catalogos/editar-usuario/editar-usuario.component';
import { FormsModule } from '@angular/forms'; 
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgregarUsuarioComponent } from './components/Catalogos/agregar-usuario/agregar-usuario.component';
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
    MainLayotComponent,
    EditarUsuarioComponent,
    AgregarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule, //npm install ngx-pagination --save sirve para la paginacion de contenido
    FormsModule,
    MatDialogModule,
    BrowserAnimationsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//ng add @angular/material si hay algun error relacionado con ese asi se instala 
