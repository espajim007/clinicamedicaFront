import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarMunicipioComponent } from './agregar-municipio.component';

describe('AgregarMunicipioComponent', () => {
  let component: AgregarMunicipioComponent;
  let fixture: ComponentFixture<AgregarMunicipioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgregarMunicipioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgregarMunicipioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
