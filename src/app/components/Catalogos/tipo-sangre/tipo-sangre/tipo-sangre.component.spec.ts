import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoSangreComponent } from './tipo-sangre.component';

describe('TipoSangreComponent', () => {
  let component: TipoSangreComponent;
  let fixture: ComponentFixture<TipoSangreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoSangreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TipoSangreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
