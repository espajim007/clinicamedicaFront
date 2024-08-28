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
import { EmpleadoClinicaComponent } from './components/Catalogos/empleado-clinica/empleado-clinica.component';
import { MedicoClinicaComponent } from './components/Catalogos/medico-clinica/medico-clinica.component';
import { PacienteComponent } from './components/Catalogos/paciente/paciente.component';
import { PersonalClinicaComponent } from './components/Catalogos/personal-clinica/personal-clinica.component';
import { CitaMenuComponent } from './components/Catalogos/cita-menu/cita-menu.component';
import { AgregarPuestoComponent } from './components/Catalogos/puesto/agregar-puesto/agregar-puesto.component';
import { EditarPuestoComponent } from './components/Catalogos/puesto/editar-puesto/editar-puesto.component';
import { PuestoComponent } from './components/Catalogos/puesto/puesto/puesto.component';
import { EditarRelacionPacienteComponent } from './components/Catalogos/Relacion-pacientes/editar-relacion-paciente/editar-relacion-paciente.component';
import { AgregarRelacionPacienteComponent } from './components/Catalogos/Relacion-pacientes/agregar-relacion-paciente/agregar-relacion-paciente.component';
import { RelacionPacienteComponent } from './components/Catalogos/Relacion-pacientes/relacion-paciente/relacion-paciente.component';
import { VerFichaPacienteComponent } from './components/Catalogos/ficha-paciente/ver-ficha-paciente/ver-ficha-paciente.component';
import { VerMedicoComponent } from './components/Catalogos/medico/ver-medico/ver-medico.component'; 

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
    TablasCatalogoComponent,
    EmpleadoClinicaComponent,
    MedicoClinicaComponent,
    PacienteComponent,
    PersonalClinicaComponent,
    CitaMenuComponent,
    AgregarPuestoComponent,
    EditarPuestoComponent,
    PuestoComponent,
    EditarRelacionPacienteComponent,
    AgregarRelacionPacienteComponent,
    RelacionPacienteComponent,
    VerFichaPacienteComponent,
    VerMedicoComponent,
    
  ],
  imports: [
    BrowserModule,      //Proporciona los servicios necesarios para que una aplicación Angular funcione en un navegador.
                        // Debe importarse una vez, típicamente en el módulo raíz (AppModule).

    AppRoutingModule,   //Gestiona la configuración de las rutas en la aplicación Angular.
                        //Se utiliza para definir y manejar la navegación dentro de la aplicación

    ReactiveFormsModule, //Ofrece soporte para formularios reactivos (o model-driven forms), lo cual permite crear 
                        //formularios complejos y dinámicos con validaciones integradas y gestión del estado del formulario.
                        
    HttpClientModule,   //Proporciona un conjunto de herramientas para hacer solicitudes HTTP. Se utiliza para comunicar 
                        //la aplicación con servidores backend y obtener o enviar datos.

    NgxPaginationModule, //Es un módulo externo que se usa para la paginación de contenido en la aplicación. Se debe instalar
                         //con npm install ngx-pagination --save. Facilita la división de listas de datos en páginas más 
                         //manejables.

    FormsModule,         //Ofrece soporte para formularios basados en plantillas (template-driven forms),
                        //lo cual permite crear formularios utilizando directivas Angular en plantillas HTML.

    MatDialogModule,      //Pertenece a Angular Material y se utiliza para crear diálogos modales. Permite mostrar ventanas
                          //emergentes con contenido variado, como formularios o mensajes de confirmación.

    BrowserAnimationsModule //Habilita el soporte para animaciones en la aplicación Angular. Es necesario cuando se usan
                            //componentes de Angular Material que dependen de animaciones para transiciones y efectos visuales.

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


//ng add @angular/material si hay algun error relacionado con ese asi se instala 
