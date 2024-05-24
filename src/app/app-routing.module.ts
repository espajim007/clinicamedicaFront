import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { PruebaComponent } from './components/prueba/prueba.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { MenuComponent } from './components/menu/menu.component';
import { MenuCatalogosComponent } from './components/Catalogos/menu-catalogos/menu-catalogos.component';
import { MainLayotComponent } from './components/main-layot/main-layot.component';
import { UsuariosComponent } from './components/Catalogos/usuarios/usuarios.component';
import { AseguradoraComponent } from './components/Catalogos/aseguradora/aseguradora/aseguradora.component';
import { CitaComponent } from './components/Catalogos/citas/cita/cita.component';
import { ContactoEmergenciaComponent } from './components/Catalogos/contacto-emergencia/contacto-emergencia/contacto-emergencia.component';
import { DepartamentoComponent } from './components/Catalogos/departamento/departamento/departamento.component';
import { DireccionComponent } from './components/Catalogos/direccion/direccion/direccion.component';
import { EmpleadoComponent } from './components/Catalogos/empleado/empleado/empleado.component';
import { EspecialidadComponent } from './components/Catalogos/especialidad/especialidad/especialidad.component';
import { EstadoCitaComponent } from './components/Catalogos/estado-cita/estado-cita/estado-cita.component';
import { EstadoCivilComponent } from './components/Catalogos/estado-civil/estado-civil/estado-civil.component';
import { ExpedientesComponent } from './components/Catalogos/expedientes/expedientes/expedientes.component';
import { FichaPacienteComponent } from './components/Catalogos/ficha-paciente/ficha-paciente/ficha-paciente.component';
import { GeneroComponent } from './components/Catalogos/genero/genero/genero.component';
import { MedicoComponent } from './components/Catalogos/medico/medico/medico.component';
import { MedicoEspecialidadComponent } from './components/Catalogos/medico-especialidad/medico-especialidad/medico-especialidad.component';
import { MunicipioComponent } from './components/Catalogos/municipio/municipio/municipio.component';
import { OcupacionComponent } from './components/Catalogos/ocupacion/ocupacion/ocupacion.component';
import { TipoSangreComponent } from './components/Catalogos/tipo-sangre/tipo-sangre/tipo-sangre.component';
import { DatosPersonalesComponent } from './components/Catalogos/datos-personales/datos-personales.component';
import { TablasCatalogoComponent } from './components/Catalogos/tablas-catalogo/tablas-catalogo.component';
import { PacienteComponent } from './components/Catalogos/paciente/paciente.component';
import { PersonalClinicaComponent } from './components/Catalogos/personal-clinica/personal-clinica.component';
import { MedicoClinicaComponent } from './components/Catalogos/medico-clinica/medico-clinica.component';
import { CitaMenuComponent } from './components/Catalogos/cita-menu/cita-menu.component';
import { PuestoComponent } from './components/Catalogos/puesto/puesto/puesto.component';
import { EmpleadoClinicaComponent } from './components/Catalogos/empleado-clinica/empleado-clinica.component';
import { RelacionPacienteComponent } from './components/Catalogos/Relacion-pacientes/relacion-paciente/relacion-paciente.component'; 
import { EditarFichaPacienteComponent } from './components/Catalogos/ficha-paciente/editar-ficha-paciente/editar-ficha-paciente.component';
import { AgregarFichaPacienteComponent } from './components/Catalogos/ficha-paciente/agregar-ficha-paciente/agregar-ficha-paciente.component';
import { VerFichaPacienteComponent } from './components/Catalogos/ficha-paciente/ver-ficha-paciente/ver-ficha-paciente.component';
import { EditarEmpleadoComponent } from './components/Catalogos/empleado/editar-empleado/editar-empleado.component';
import { EditarMedicoComponent } from './components/Catalogos/medico/editar-medico/editar-medico.component';
import { VerMedicoComponent } from './components/Catalogos/medico/ver-medico/ver-medico.component';
import { AgregarMedicoComponent } from './components/Catalogos/medico/agregar-medico/agregar-medico.component';


const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Ruta predeterminada
  {path:'login', component: LoginComponent},
  {path:'inicio', component: InicioComponent},
  {path:'registrarse', component: RegistrarseComponent},
  {path:'menu', component: MenuComponent},
  {path:'menu-catalogos', component: MenuCatalogosComponent},
  {path:'usuarios', component: UsuariosComponent},
  {path:'prueba', component: PruebaComponent},
  {path:'aseguradora', component: AseguradoraComponent},
  {path:'cita', component: CitaComponent},
  {path:'contacto-emergencia', component: ContactoEmergenciaComponent},
  {path:'departamento', component: DepartamentoComponent},
  {path:'direccion', component: DireccionComponent},
  {path:'empleado', component: EmpleadoComponent},
  {path:'editar-empleado', component: EditarEmpleadoComponent},
  {path:'especialidad', component: EspecialidadComponent},
  {path:'estado-cita', component: EstadoCitaComponent},
  {path:'estado-civil', component: EstadoCivilComponent},
  {path:'expediente', component: ExpedientesComponent},
  {path:'ficha-paciente', component: FichaPacienteComponent},
  {path:'editar-ficha-paciente/:id', component: EditarFichaPacienteComponent },
  {path:'agregar-ficha-paciente', component: AgregarFichaPacienteComponent},
  {path:'ver-ficha-paciente/:id', component: VerFichaPacienteComponent},
  {path:'genero', component: GeneroComponent},
  {path:'medico', component: MedicoComponent},
  {path:'medico-especialidad', component: MedicoEspecialidadComponent},
  {path:'municipio', component: MunicipioComponent},
  {path:'ocupacion', component: OcupacionComponent},
  {path:'tipo-sangre', component: TipoSangreComponent},
  {path:'datos-personales', component: DatosPersonalesComponent},
  {path:'tablas-catalogo', component: TablasCatalogoComponent},
  {path:'paciente', component: PacienteComponent},
  {path:'personal-clinica', component: PersonalClinicaComponent},
  {path:'medico-clinica', component: MedicoClinicaComponent},
  {path:'cita-menu', component: CitaMenuComponent},
  {path:'puesto', component: PuestoComponent},
  {path:'empleado-clinica', component: EmpleadoClinicaComponent},
  {path:'relacion-paciente', component: RelacionPacienteComponent},
  {path:'editar-medico/:id', component: EditarMedicoComponent},
  {path:'ver-medico/:id', component: VerMedicoComponent},
  {path:'agregar-medico', component: AgregarMedicoComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
