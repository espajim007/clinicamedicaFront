import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarGeneroComponent } from './agregar-genero.component';

describe('AgregarGeneroComponent', () => {
  let component: AgregarGeneroComponent;
  let fixture: ComponentFixture<AgregarGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarGeneroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
