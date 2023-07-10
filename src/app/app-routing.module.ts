import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { WorkoutTrackerComponent } from './workout-tracker/workout-tracker.component';
import { ExerciseLibraryComponent } from './exercise-library/exercise-library.component';
import { CalorieCalculatorComponent } from './calorie-calculator/calorie-calculator.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'workout-tracker', component: WorkoutTrackerComponent },
  { path: 'exercise-library', component: ExerciseLibraryComponent },
  { path: 'calorie-calculator', component: CalorieCalculatorComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
