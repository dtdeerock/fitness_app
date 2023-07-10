import { Component } from '@angular/core';
import { Workout } from '../workout.model';

@Component({
  selector: 'app-workout-tracker',
  templateUrl: './workout-tracker.component.html',
  styleUrls: ['./workout-tracker.component.scss']
})
export class WorkoutTrackerComponent {
  workouts: Workout[] = [];
  newWorkout: Workout = {
    name: '',
    duration: 0,
    caloriesBurned: 0
  };

  addWorkout(): void {
    this.workouts.push(this.newWorkout);
    this.newWorkout = {
      name: '',
      duration: 0,
      caloriesBurned: 0
    };
  }
}
