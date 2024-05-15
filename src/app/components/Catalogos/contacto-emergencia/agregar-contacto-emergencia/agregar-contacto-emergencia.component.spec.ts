import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarContactoEmergenciaComponent } from './agregar-contacto-emergencia.component';

describe('AgregarContactoEmergenciaComponent', () => {
  let component: AgregarContactoEmergenciaComponent;
  let fixture: ComponentFixture<AgregarContactoEmergenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarContactoEmergenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarContactoEmergenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
