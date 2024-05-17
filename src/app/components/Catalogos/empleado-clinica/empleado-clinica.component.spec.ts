import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadoClinicaComponent } from './empleado-clinica.component';

describe('EmpleadoClinicaComponent', () => {
  let component: EmpleadoClinicaComponent;
  let fixture: ComponentFixture<EmpleadoClinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpleadoClinicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpleadoClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
