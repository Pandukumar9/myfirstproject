import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tdf2Component } from './tdf2.component';

describe('Tdf2Component', () => {
  let component: Tdf2Component;
  let fixture: ComponentFixture<Tdf2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tdf2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tdf2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
