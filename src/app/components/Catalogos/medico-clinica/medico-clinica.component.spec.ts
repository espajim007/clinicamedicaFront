import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicoClinicaComponent } from './medico-clinica.component';

describe('MedicoClinicaComponent', () => {
  let component: MedicoClinicaComponent;
  let fixture: ComponentFixture<MedicoClinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicoClinicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicoClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
