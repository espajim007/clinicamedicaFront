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
import { AseguradoraComponent } from './components/Catalogos/aseguradora/aseguradora/aseguradora.component';
import { AgregarAseguradoraComponent } from './components/Catalogos/aseguradora/agregar-aseguradora/agregar-aseguradora.component';
import { EditarAseguradoraComponent } from './components/Catalogos/aseguradora/editar-aseguradora/editar-aseguradora.component';
import { EditarCitaComponent } from './components/Catalogos/citas/editar-cita/editar-cita.component';
import { AgregarCitaComponent } from './components/Catalogos/citas/agregar-cita/agregar-cita.component';
import { CitaComponent } from './components/Catalogos/citas/cita/cita.component';
import { AgregarContactoEmergenciaComponent } from './components/Catalogos/contacto-emergencia/agregar-contacto-emergencia/agregar-contacto-emergencia.component';
import { EditarContactoEmergenciaComponent } from './components/Catalogos/contacto-emergencia/editar-contacto-emergencia/editar-contacto-emergencia.component';
import { ContactoEmergenciaComponent } from './components/Catalogos/contacto-emergencia/contacto-emergencia/contacto-emergencia.component';
import { DepartamentoComponent } from './components/Catalogos/departamento/departamento/departamento.component';
import { EditarDepartamentoComponent } from './components/Catalogos/departamento/editar-departamento/editar-departamento.component';
import { AgregarDepartamentoComponent } from './components/Catalogos/departamento/agregar-departamento/agregar-departamento.component';
import { AgregarDireccionComponent } from './components/Catalogos/direccion/agregar-direccion/agregar-direccion.component';
import { EditarDireccionComponent } from './components/Catalogos/direccion/editar-direccion/editar-direccion.component';
import { DireccionComponent } from './components/Catalogos/direccion/direccion/direccion.component';
import { EditarEmpleadoComponent } from './components/Catalogos/empleado/editar-empleado/editar-empleado.component';
import { AgregarEmpleadoComponent } from './components/Catalogos/empleado/agregar-empleado/agregar-empleado.component';
import { EmpleadoComponent } from './components/Catalogos/empleado/empleado/empleado.component';
import { EspecialidadComponent } from './components/Catalogos/especialidad/especialidad/especialidad.component';
import { AgregarEspecialidadComponent } from './components/Catalogos/especialidad/agregar-especialidad/agregar-especialidad.component';
import { EditarEspecialidadComponent } from './components/Catalogos/especialidad/editar-especialidad/editar-especialidad.component';
import { EditarEstadoCitaComponent } from './components/Catalogos/estado-cita/editar-estado-cita/editar-estado-cita.component';
import { AgregarEstadoCitaComponent } from './components/Catalogos/estado-cita/agregar-estado-cita/agregar-estado-cita.component';
import { AgregarEstadoCivilComponent } from './components/Catalogos/estado-civil/agregar-estado-civil/agregar-estado-civil.component';
import { EditarEstadoCivilComponent } from './components/Catalogos/estado-civil/editar-estado-civil/editar-estado-civil.component';
import { EstadoCivilComponent } from './components/Catalogos/estado-civil/estado-civil/estado-civil.component';
import { EstadoCitaComponent } from './components/Catalogos/estado-cita/estado-cita/estado-cita.component';
import { ExpedientesComponent } from './components/Catalogos/expedientes/expedientes/expedientes.component';
import { AgregarExpedientesComponent } from './components/Catalogos/expedientes/agregar-expedientes/agregar-expedientes.component';
import { EditarExpedientesComponent } from './components/Catalogos/expedientes/editar-expedientes/editar-expedientes.component';
import { EditarFichaPacienteComponent } from './components/Catalogos/ficha-paciente/editar-ficha-paciente/editar-ficha-paciente.component';
import { AgregarFichaPacienteComponent } from './components/Catalogos/ficha-paciente/agregar-ficha-paciente/agregar-ficha-paciente.component';
import { FichaPacienteComponent } from './components/Catalogos/ficha-paciente/ficha-paciente/ficha-paciente.component';
import { EditarGeneroComponent } from './components/Catalogos/genero/editar-genero/editar-genero.component';
import { AgregarGeneroComponent } from './components/Catalogos/genero/agregar-genero/agregar-genero.component';
import { GeneroComponent } from './components/Catalogos/genero/genero/genero.component';
import { MedicoComponent } from './components/Catalogos/medico/medico/medico.component';
import { AgregarMedicoComponent } from './components/Catalogos/medico/agregar-medico/agregar-medico.component';
import { EditarMedicoComponent } from './components/Catalogos/medico/editar-medico/editar-medico.component';
import { AgregarMedicoEspecialidadComponent } from './components/Catalogos/medico-especialidad/agregar-medico-especialidad/agregar-medico-especialidad.component';
import { EditarMedicoEspecialidadComponent } from './components/Catalogos/medico-especialidad/editar-medico-especialidad/editar-medico-especialidad.component';
import { MedicoEspecialidadComponent } from './components/Catalogos/medico-especialidad/medico-especialidad/medico-especialidad.component';
import { MunicipioComponent } from './components/Catalogos/municipio/municipio/municipio.component';
import { AgregarMunicipioComponent } from './components/Catalogos/municipio/agregar-municipio/agregar-municipio.component';
import { EditarMunicipioComponent } from './components/Catalogos/municipio/editar-municipio/editar-municipio.component';
import { EditarOcupacionComponent } from './components/Catalogos/ocupacion/editar-ocupacion/editar-ocupacion.component';
import { AgregarOcupacionComponent } from './components/Catalogos/ocupacion/agregar-ocupacion/agregar-ocupacion.component';
import { OcupacionComponent } from './components/Catalogos/ocupacion/ocupacion/ocupacion.component';
import { EditarTipoSangreComponent } from './components/Catalogos/tipo-sangre/editar-tipo-sangre/editar-tipo-sangre.component';
import { AgregarTipoSangreComponent } from './components/Catalogos/tipo-sangre/agregar-tipo-sangre/agregar-tipo-sangre.component';
import { TipoSangreComponent } from './components/Catalogos/tipo-sangre/tipo-sangre/tipo-sangre.component';
import { NavigationComponent } from './navigation/navigation.component';
import { DatosPersonalesComponent } from './components/Catalogos/datos-personales/datos-personales.component';
import { TablasCatalogoComponent } from './components/Catalogos/tablas-catalogo/tablas-catalogo.component';
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
    AgregarUsuarioComponent,
    AseguradoraComponent,
    AgregarAseguradoraComponent,
    EditarAseguradoraComponent,
    EditarCitaComponent,
    AgregarCitaComponent,
    CitaComponent,
    AgregarContactoEmergenciaComponent,
    EditarContactoEmergenciaComponent,
    ContactoEmergenciaComponent,
    DepartamentoComponent,
    EditarDepartamentoComponent,
    AgregarDepartamentoComponent,
    AgregarDireccionComponent,
    EditarDireccionComponent,
    DireccionComponent,
    EditarEmpleadoComponent,
    AgregarEmpleadoComponent,
    EmpleadoComponent,
    EspecialidadComponent,
    AgregarEspecialidadComponent,
    EditarEspecialidadComponent,
    EditarEstadoCitaComponent,
    AgregarEstadoCitaComponent,
    AgregarEstadoCivilComponent,
    EditarEstadoCivilComponent,
    EstadoCivilComponent,
    EstadoCitaComponent,
    ExpedientesComponent,
    AgregarExpedientesComponent,
    EditarExpedientesComponent,
    EditarFichaPacienteComponent,
    AgregarFichaPacienteComponent,
    FichaPacienteComponent,
    EditarGeneroComponent,
    AgregarGeneroComponent,
    GeneroComponent,
    MedicoComponent,
    AgregarMedicoComponent,
    EditarMedicoComponent,
    AgregarMedicoEspecialidadComponent,
    EditarMedicoEspecialidadComponent,
    MedicoEspecialidadComponent,
    MunicipioComponent,
    AgregarMunicipioComponent,
    EditarMunicipioComponent,
    EditarOcupacionComponent,
    AgregarOcupacionComponent,
    OcupacionComponent,
    EditarTipoSangreComponent,
    AgregarTipoSangreComponent,
    TipoSangreComponent,
    NavigationComponent,
    DatosPersonalesComponent,
    TablasCatalogoComponent
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
