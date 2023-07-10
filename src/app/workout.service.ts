import { Injectable } from '@angular/core';
import { Workout } from './workout.model';

@Injectable({
  providedIn: 'root'
})
export class WorkoutService {
  addWorkout(workout: Workout) {
    throw new Error('Method not implemented.');
  }
  getWorkouts: any;
  deleteWorkout: any;

  constructor() { }
}
