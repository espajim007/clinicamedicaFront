import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarEstadoCivilComponent } from './agregar-estado-civil.component';

describe('AgregarEstadoCivilComponent', () => {
  let component: AgregarEstadoCivilComponent;
  let fixture: ComponentFixture<AgregarEstadoCivilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarEstadoCivilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarEstadoCivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
