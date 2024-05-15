import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarExpedientesComponent } from './agregar-expedientes.component';

describe('AgregarExpedientesComponent', () => {
  let component: AgregarExpedientesComponent;
  let fixture: ComponentFixture<AgregarExpedientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarExpedientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarExpedientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
