import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarRelacionPacienteComponent } from './agregar-relacion-paciente.component';

describe('AgregarRelacionPacienteComponent', () => {
  let component: AgregarRelacionPacienteComponent;
  let fixture: ComponentFixture<AgregarRelacionPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarRelacionPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarRelacionPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
