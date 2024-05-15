import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarOcupacionComponent } from './editar-ocupacion.component';

describe('EditarOcupacionComponent', () => {
  let component: EditarOcupacionComponent;
  let fixture: ComponentFixture<EditarOcupacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarOcupacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarOcupacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
