import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarRelacionPacienteComponent } from './editar-relacion-paciente.component';

describe('EditarRelacionPacienteComponent', () => {
  let component: EditarRelacionPacienteComponent;
  let fixture: ComponentFixture<EditarRelacionPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarRelacionPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarRelacionPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
