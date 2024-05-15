import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarAseguradoraComponent } from './agregar-aseguradora.component';

describe('AgregarAseguradoraComponent', () => {
  let component: AgregarAseguradoraComponent;
  let fixture: ComponentFixture<AgregarAseguradoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarAseguradoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarAseguradoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
