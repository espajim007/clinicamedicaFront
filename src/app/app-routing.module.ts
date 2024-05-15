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


const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full' }, // Ruta predeterminada
  {path:'login', component: LoginComponent},
  {path:'inicio', component: InicioComponent},
  {path:'registrarse', component: RegistrarseComponent},
  {path:'menu', component: MenuComponent},
  {path:'menu-catalogos', component: MenuCatalogosComponent},
  {path:'prueba', component: PruebaComponent},
  {path:'aseguradora', component: AseguradoraComponent},
  {path:'cita', component: CitaComponent},
  {path:'contacto-emergencia', component: ContactoEmergenciaComponent},
  {path:'departamento', component: DepartamentoComponent},
  {path:'direccion', component: DireccionComponent},
  {path:'empleado', component: EmpleadoComponent},
  {path:'especialidad', component: EspecialidadComponent},
  {path:'estado-cita', component: EstadoCitaComponent},
  {path:'estado-civil', component: EstadoCivilComponent},
  {path:'expediente', component: ExpedientesComponent},
  {path:'ficha-paciente', component: FichaPacienteComponent},
  {path:'genero', component: GeneroComponent},
  {path:'medico', component: MedicoComponent},
  {path:'medico-especialidad', component: MedicoEspecialidadComponent},
  {path:'municipio', component: MunicipioComponent},
  {path:'ocupacion', component: OcupacionComponent},
  {path:'tipo-sangre', component: TipoSangreComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
