import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEstadoCitaComponent } from './agregar-estado-cita.component';

describe('AgregarEstadoCitaComponent', () => {
  let component: AgregarEstadoCitaComponent;
  let fixture: ComponentFixture<AgregarEstadoCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEstadoCitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEstadoCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
