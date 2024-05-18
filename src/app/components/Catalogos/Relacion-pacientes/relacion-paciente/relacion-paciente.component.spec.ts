import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelacionPacienteComponent } from './relacion-paciente.component';

describe('RelacionPacienteComponent', () => {
  let component: RelacionPacienteComponent;
  let fixture: ComponentFixture<RelacionPacienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RelacionPacienteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RelacionPacienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
