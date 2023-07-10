import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MacroCalculatorComponent } from './macro-calculator.component';

describe('MacroCalculatorComponent', () => {
  let component: MacroCalculatorComponent;
  let fixture: ComponentFixture<MacroCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MacroCalculatorComponent]
    });
    fixture = TestBed.createComponent(MacroCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
