import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarTipoSangreComponent } from './editar-tipo-sangre.component';

describe('EditarTipoSangreComponent', () => {
  let component: EditarTipoSangreComponent;
  let fixture: ComponentFixture<EditarTipoSangreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarTipoSangreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarTipoSangreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
