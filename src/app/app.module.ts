import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { WorkoutTrackerComponent } from './workout-tracker/workout-tracker.component';
import { ExerciseLibraryComponent } from './exercise-library/exercise-library.component';

import { UserService } from './user.service';
import { WorkoutService } from './workout.service';
import { ExerciseService } from './exercise.service';
import { FormsModule } from '@angular/forms';
import { CalorieCalculatorComponent } from './calorie-calculator/calorie-calculator.component';
import { MacroCalculatorComponent } from './macro-calculator/macro-calculator.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    WorkoutTrackerComponent,
    ExerciseLibraryComponent,
    CalorieCalculatorComponent,
    MacroCalculatorComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UserService,
    WorkoutService,
    ExerciseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
