import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarMedicoEspecialidadComponent } from './editar-medico-especialidad.component';

describe('EditarMedicoEspecialidadComponent', () => {
  let component: EditarMedicoEspecialidadComponent;
  let fixture: ComponentFixture<EditarMedicoEspecialidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarMedicoEspecialidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarMedicoEspecialidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
