import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMedicoEspecialidadComponent } from './agregar-medico-especialidad.component';

describe('AgregarMedicoEspecialidadComponent', () => {
  let component: AgregarMedicoEspecialidadComponent;
  let fixture: ComponentFixture<AgregarMedicoEspecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarMedicoEspecialidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarMedicoEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
