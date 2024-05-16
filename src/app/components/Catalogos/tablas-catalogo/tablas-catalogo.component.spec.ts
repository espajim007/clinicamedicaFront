import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasCatalogoComponent } from './tablas-catalogo.component';

describe('TablasCatalogoComponent', () => {
  let component: TablasCatalogoComponent;
  let fixture: ComponentFixture<TablasCatalogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablasCatalogoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablasCatalogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
