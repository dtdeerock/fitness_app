import { Component } from '@angular/core';

@Component({
  selector: 'app-calorie-calculator',
  templateUrl: './calorie-calculator.component.html',
  styleUrls: ['./calorie-calculator.component.scss'],
})
export class CalorieCalculatorComponent {
  age!: number;
  gender!: string;
  weight!: number;
  height!: number;
  activityLevel!: number;
  totalCalories!: number;

  calculateCalories() {
    const weightInKg = this.weight;
    const heightInCm = this.height;
    const age = this.age;
    let bmr: number;

    if (this.gender === 'male') {
      bmr = (10 * weightInKg) + (6.25 * heightInCm) - (5 * age) + 5;
    } else {
      bmr = (10 * weightInKg) + (6.25 * heightInCm) - (5 * age) - 161;
    }

    // Multiply the BMR by an activity factor to estimate TDEE
    const activityFactor = this.activityLevel;
    const tdee = bmr * activityFactor;

    // Assign the calculated TDEE to the totalCalories property
    this.totalCalories = tdee;
  }
}
