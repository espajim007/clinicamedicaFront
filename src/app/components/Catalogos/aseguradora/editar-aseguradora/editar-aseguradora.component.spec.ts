import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarAseguradoraComponent } from './editar-aseguradora.component';

describe('EditarAseguradoraComponent', () => {
  let component: EditarAseguradoraComponent;
  let fixture: ComponentFixture<EditarAseguradoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarAseguradoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarAseguradoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
