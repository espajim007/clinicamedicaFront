import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarEstadoCitaComponent } from './editar-estado-cita.component';

describe('EditarEstadoCitaComponent', () => {
  let component: EditarEstadoCitaComponent;
  let fixture: ComponentFixture<EditarEstadoCitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarEstadoCitaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarEstadoCitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
