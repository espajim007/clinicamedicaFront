import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarOcupacionComponent } from './agregar-ocupacion.component';

describe('AgregarOcupacionComponent', () => {
  let component: AgregarOcupacionComponent;
  let fixture: ComponentFixture<AgregarOcupacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarOcupacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarOcupacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
