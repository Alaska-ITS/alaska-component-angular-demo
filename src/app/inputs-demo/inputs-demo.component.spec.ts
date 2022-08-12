import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsDemoComponent } from './inputs-demo.component';

describe('InputsDemoComponent', () => {
  let component: InputsDemoComponent;
  let fixture: ComponentFixture<InputsDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputsDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
