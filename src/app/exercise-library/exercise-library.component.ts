import { Component, OnInit } from '@angular/core';
import { Exercise } from '../exercise.model';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-exercise-library',
  templateUrl: './exercise-library.component.html',
  styleUrls: ['./exercise-library.component.scss'],
})
export class ExerciseLibraryComponent implements OnInit {
  exercises!: Exercise[];

  constructor(private exerciseService: ExerciseService) {}

  ngOnInit() {
    this.exercises = this.exerciseService.getExercises();
  }
}
