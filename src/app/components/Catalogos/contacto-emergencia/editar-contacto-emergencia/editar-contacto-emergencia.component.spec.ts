import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarContactoEmergenciaComponent } from './editar-contacto-emergencia.component';

describe('EditarContactoEmergenciaComponent', () => {
  let component: EditarContactoEmergenciaComponent;
  let fixture: ComponentFixture<EditarContactoEmergenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarContactoEmergenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarContactoEmergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
