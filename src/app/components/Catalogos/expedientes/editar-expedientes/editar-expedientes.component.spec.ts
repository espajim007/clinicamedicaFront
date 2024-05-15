import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExpedientesComponent } from './editar-expedientes.component';

describe('EditarExpedientesComponent', () => {
  let component: EditarExpedientesComponent;
  let fixture: ComponentFixture<EditarExpedientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarExpedientesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarExpedientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
