import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarFichaPacienteComponent } from './editar-ficha-paciente.component';

describe('EditarFichaPacienteComponent', () => {
  let component: EditarFichaPacienteComponent;
  let fixture: ComponentFixture<EditarFichaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarFichaPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarFichaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



// <div class="container-fluid d-flex justify-content-center align-items-center vh-100" style="background-image: url('../../../assets/images/2.jpg'); background-size: cover; background-position: center;">
//     <div class="container-fluid">
//         <div class="row flex-nowrap">
//             <div class="col-auto">
//                 <app-navigation></app-navigation>
//             </div>
//             <div class="col py-2 d-flex ">
//                 <div class="content-area">
//                     <div class="imagen-custom">
//                         <img src="../../../../assets/images/Logos/fi.png" alt="Ficha">
//                     </div>
//                     <hr>
//                     <form (ngSubmit)="guardarDatos()" #formularioPrincipal="ngForm">
//                         <!-- Contenido del primer formulario -->
//                         <form #agregarFormPaciente="ngForm" *ngIf="paciente.length > 0">
//                             <table>
//                                 <tr>
//                                     <td>
//                                         <div class="form-group" >
//                                             <label for="primerNombre" style="margin-right: 5px;">Primer Nombre:</label>
//                                             <input type="text" id="primerNombre" name="primerNombre" [(ngModel)]="paciente[0].primer_nombre" required style="width: 100px; font-size: 14px; border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="segundoNombre" style="margin-right: 5px;">SegundoNombre:</label>
//                                             <input type="text" id="segundoNombre" name="segundoNombre" [(ngModel)]="paciente[0].segundo_nombre" required style="width: 100px; font-size: 14px;border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="nit" style="margin-right: 5px;">NIT:</label>
//                                             <input type="number" id="nit" name="nit" [(ngModel)]="paciente[0].NIT" required style="width: 100px; font-size: 14px;border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="primerapellido" style="margin-right: 5px;">PrimerApellido:</label>
//                                             <input type="text" id="primerapellido" name="primerapellido" [(ngModel)]="paciente[0].primer_apellido" required style="width: 100px; font-size: 14px;border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="segundoapellido" style="margin-right: 5px;">SegundoApellido:</label>
//                                             <input type="text" id="segundoapellido" name="segundoapellido" [(ngModel)]="paciente[0].segundo_apellido" required style="width: 100px; font-size: 14px;border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="dpi" style="margin-right: 5px;">DPI:</label>
//                                             <input type="number" id="dpi" name="dpi" [(ngModel)]="paciente[0].DPI" required style="width: 100px; font-size: 14px;border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="telefono" style="margin-right: 5px;">Telefono:</label>
//                                             <input type="number" id="telefono" name="telefono" [(ngModel)]="paciente[0].telefono" required style="width: 100px; font-size: 14px;border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="correo" style="margin-right: 5px;">Correo:</label>
//                                             <input type="email" id="correo" name="correo" [(ngModel)]="paciente[0].correo_electronico" required style="width: 100px; font-size: 14px;border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="ocupacion">Ocupacion:</label>
//                                             <select id="ocupacion" name="ocupacion" [(ngModel)]="paciente[0].id_ocupacion" required style="width: 80px; font-size: 14px;border-radius: 10px;">
//                                                 <option *ngFor="let ocupacion of ocupacion" [value]="ocupacion.id_ocupacion">{{ ocupacion.nombre }}</option>
//                                             </select>
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="tipoSangre">TipoSangre:</label>
//                                             <select id="tipoSangre" name="tipoSangre" [(ngModel)]="paciente[0].id_tipo_sangre" required style="width: 80px; font-size: 14px;border-radius: 10px;">
//                                                 <option *ngFor="let sangre of tipoSangre" [value]="sangre.id_tipo_sangre">{{ sangre.nombre }}</option>
//                                             </select>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="estadoCivil">EstadoCivil:</label>
//                                             <select id="estadoCivil" name="estadoCivil" [(ngModel)]="paciente[0].id_estado_civil" required style="width: 80px; font-size: 14px;border-radius: 10px;">
//                                                 <option *ngFor="let estado of estadoCivil" [value]="estado.id_estado_civil">{{ estado.nombre }}</option>
//                                             </select>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="genero" style="margin-right: 5px;">Genero:</label>
//                                             <select id="genero" name="genero" [(ngModel)]="paciente[0].genero_idgenero" required style="width: 80px; font-size: 14px;border-radius: 10px;">
//                                                 <option *ngFor="let gen of genero" [value]="gen.idgenero">{{ gen.genero }}</option>
//                                             </select>
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="aseguradora">Aseguradora:</label>
//                                             <select id="aseguradora" name="aseguradora" [(ngModel)]="paciente[0].aseguradora_id_aseguradora" required style="width: 80px; font-size: 14px;border-radius: 10px;">
//                                                 <option *ngFor="let aseg of aseguradora" [value]="aseg.id_aseguradora">{{ aseg.nombre }}</option>
//                                             </select>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="fechanacimiento" style="margin-right: 5px;">Nacimiento:</label>
//                                             <input type="text" id="fechanacimiento" name="fechanacimiento" [(ngModel)]="paciente[0].fecha_nacimiento" required style="width: 100px; font-size: 14px;border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="observaciones" style="margin-right: 5px;">Observaciones:</label>
//                                             <input type="text" id="observaciones" name="observaciones" [(ngModel)]="paciente[0].observaciones" required style="width: 100px; font-size: 14px;border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                 </tr>
//                             </table>
//                         </form>

//                         <!-- Contenido del segundo formulario -->
//                         <form #agregarFormDireccion="ngForm" *ngIf="direccion.length > 0">
//                             <table>
//                                 <tr>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="municipio">Municipio:</label>
//                                             <select id="municipio" name="municipio" [(ngModel)]="direccion[0].id_municipio" required style="width: 80px; font-size: 14px;border-radius: 10px;">
//                                                 <option *ngFor="let aseg of municipio" [value]="aseg.id_municipio">{{ aseg.nombre }}</option>
//                                             </select>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="avenida" style="margin-right: 5px;">Avenida:</label>
//                                             <input type="text" id="avenida" name="avenida" [(ngModel)]="direccion[0].avenida" required style="width: 50px; font-size: 14px;border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="zonacalle" style="margin-right: 5px;">Zona/barrio:</label>
//                                             <input type="text" id="zonacalle" name="zonacalle" [(ngModel)]="direccion[0].zona_barrio" required style="width: 50px; font-size: 14px;border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="calle" style="margin-right: 5px;">No.Calle:</label>
//                                             <input type="text" id="calle" name="calle" [(ngModel)]="direccion[0].numero_vivienda" required style="width: 50px; font-size: 14px;border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="residencial_colonia" style="margin-right: 5px;">No.Calle:</label>
//                                             <input type="text" id="residencial_colonia" name="residencial_colonia" [(ngModel)]="direccion[0].residencial_colonia" required style="width: 50px; font-size: 14px;border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="nocalle" style="margin-right: 5px;">indicacion_extra:</label>
//                                             <input type="text" id="nocalle" name="nocalle" [(ngModel)]="direccion[0].indicacion_extra" required style="width: 50px; font-size: 14px;border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                 </tr>
//                             </table>
//                         </form>

//                         <!-- Contenido del tercer formulario -->
//                         <form #agregarFormContacto="ngForm" *ngIf="contactoEmergencia.length > 0">
//                             <table>
//                                 <tr>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="primerNombre" style="margin-right: 5px;">PrimerNombre:</label>
//                                             <input type="text" id="primerNombre" name="primerNombre" [(ngModel)]="contactoEmergencia[0].primer_nombre" required style="width: 100px; font-size: 14px;border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="segundoNombre" style="margin-right: 5px;">SegundoNombre:</label>
//                                             <input type="text" id="segundoNombre" name="segundoNombre" [(ngModel)]="contactoEmergencia[0].segundo_nombre" required style="width: 100px; font-size: 14px;border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="primerapellido" style="margin-right: 5px;">PrimerApellido:</label>
//                                             <input type="text" id="primerapellido" name="primerapellido" [(ngModel)]="contactoEmergencia[0].primer_apellido" required style="width: 100px; font-size: 14px;border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="segundoapellido" style="margin-right: 5px;">SegundoApellido:</label>
//                                             <input type="text" id="segundoapellido" name="segundoapellido" [(ngModel)]="contactoEmergencia[0].segundo_apellido" required style="width: 100px; font-size: 14px;border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                 </tr>
//                                 <tr>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="genero" style="margin-right: 5px;">Genero:</label>
//                                             <select id="genero" name="genero" [(ngModel)]="contactoEmergencia[0].id_genero" required style="width: 100px; font-size: 14px;border-radius: 10px;">
//                                                 <option *ngFor="let gen of genero" [value]="gen.idgenero">{{ gen.genero }}</option>
//                                             </select>
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="telefono" style="margin-right: 5px;">Telefono:</label>
//                                             <input type="number" id="telefono" name="telefono" [(ngModel)]="contactoEmergencia[0].telefono" required style="width: 100px; font-size: 14px;border-radius: 10px;">
//                                         </div>
//                                     </td>
//                                     <td>
//                                         <div class="form-group">
//                                             <label for="relacion" style="margin-right: 5px;">Relacion:</label>
//                                             <select id="relacion" name="relacion" [(ngModel)]="contactoEmergencia[0].id_relacion_paciente" required style="width: 100px; font-size: 14px;border-radius: 10px;">
//                                                 <option *ngFor="let relacion of relacionPaciente" [value]="relacion.id_relacion_paciente">{{ relacion.relacion }}</option>
//                                             </select>
//                                         </div>
//                                     </td>
//                                 </tr>
//                             </table>
//                         </form>

//                         <!-- Botón de guardar -->
//                         <div class="text-center">
//                             <button type="submit" class="btn btn-primary">Guardar</button>
//                         </div>
//                     </form>
//                     <div class="imagen-custom">
//                         <img src="../../../../assets/images/Logos/dire.png" alt="Direccion">
//                     </div>
//                     <hr>
//                 </div>
//                 <div class="content-area" style="max-height: 400px; overflow-y: auto;align-content: center;">
//                     <div class="imagen-custom">
//                         <img src="../../../../assets/images/Logos/cont.png" alt="Contacto">
//                     </div>
//                     <hr>
//                 </div>
//             </div>
//             <a routerLink="/paciente">
//                 <img src="../../../assets/images/Logos/reg.png" alt="menu" style="position: absolute; bottom: 10px; left: 200px; width: 50px; height: auto; object-fit: cover;">
//             </a>
//         </div>
//     </div>
// </div>
