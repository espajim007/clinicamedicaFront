import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarFichaPacienteComponent } from './agregar-ficha-paciente.component';

describe('AgregarFichaPacienteComponent', () => {
  let component: AgregarFichaPacienteComponent;
  let fixture: ComponentFixture<AgregarFichaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarFichaPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarFichaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
