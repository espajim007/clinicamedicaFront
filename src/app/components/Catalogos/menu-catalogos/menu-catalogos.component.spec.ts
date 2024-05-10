import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuCatalogosComponent } from './menu-catalogos.component';

describe('MenuCatalogosComponent', () => {
  let component: MenuCatalogosComponent;
  let fixture: ComponentFixture<MenuCatalogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuCatalogosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuCatalogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
