import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivComponent } from './priv.component';

describe('PrivComponent', () => {
  let component: PrivComponent;
  let fixture: ComponentFixture<PrivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
