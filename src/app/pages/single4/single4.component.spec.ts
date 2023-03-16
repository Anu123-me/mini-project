import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Single4Component } from './single4.component';

describe('Single4Component', () => {
  let component: Single4Component;
  let fixture: ComponentFixture<Single4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Single4Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Single4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
