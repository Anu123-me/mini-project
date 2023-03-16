import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Single3Component } from './single3.component';

describe('Single3Component', () => {
  let component: Single3Component;
  let fixture: ComponentFixture<Single3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Single3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Single3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
