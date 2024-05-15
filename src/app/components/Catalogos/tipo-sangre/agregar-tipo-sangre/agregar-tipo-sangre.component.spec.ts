import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarTipoSangreComponent } from './agregar-tipo-sangre.component';

describe('AgregarTipoSangreComponent', () => {
  let component: AgregarTipoSangreComponent;
  let fixture: ComponentFixture<AgregarTipoSangreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarTipoSangreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarTipoSangreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
