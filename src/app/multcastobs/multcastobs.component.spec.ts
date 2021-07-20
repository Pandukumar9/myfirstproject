import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultcastobsComponent } from './multcastobs.component';

describe('MultcastobsComponent', () => {
  let component: MultcastobsComponent;
  let fixture: ComponentFixture<MultcastobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultcastobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultcastobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
