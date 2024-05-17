import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalClinicaComponent } from './personal-clinica.component';

describe('PersonalClinicaComponent', () => {
  let component: PersonalClinicaComponent;
  let fixture: ComponentFixture<PersonalClinicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalClinicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalClinicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
