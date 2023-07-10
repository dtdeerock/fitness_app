import { Component } from '@angular/core';
import { MacroCalculator, MacroResult } from './macro-calculator';

@Component({
  selector: 'app-macro-calculator',
  templateUrl: './macro-calculator.component.html',
  styleUrls: ['./macro-calculator.component.scss']
})
export class MacroCalculatorComponent {
  weight!: number;
  height!: number;
  age!: number;
  gender!: string;
  activityLevel!: number;
  goal!: string;
  macroResult!: MacroResult;

  constructor(private macroCalculator: MacroCalculator) { }

  calculateMacros() {
    this.macroResult = this.macroCalculator.calculateMacros(
      this.weight,
      this.height,
      this.age,
      this.gender,
      this.activityLevel,
      this.goal
    );
  }
}
