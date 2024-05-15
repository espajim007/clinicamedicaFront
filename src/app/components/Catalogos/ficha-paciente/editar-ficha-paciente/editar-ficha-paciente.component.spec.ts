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
