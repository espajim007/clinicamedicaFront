import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerFichaPacienteComponent } from './ver-ficha-paciente.component';

describe('VerFichaPacienteComponent', () => {
  let component: VerFichaPacienteComponent;
  let fixture: ComponentFixture<VerFichaPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerFichaPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerFichaPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
