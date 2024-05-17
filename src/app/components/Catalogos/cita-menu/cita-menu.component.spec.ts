import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaMenuComponent } from './cita-menu.component';

describe('CitaMenuComponent', () => {
  let component: CitaMenuComponent;
  let fixture: ComponentFixture<CitaMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitaMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
