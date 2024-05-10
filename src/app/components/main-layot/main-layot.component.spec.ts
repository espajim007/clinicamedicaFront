import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainLayotComponent } from './main-layot.component';

describe('MainLayotComponent', () => {
  let component: MainLayotComponent;
  let fixture: ComponentFixture<MainLayotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainLayotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainLayotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
