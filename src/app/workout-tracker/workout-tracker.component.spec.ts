import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutTrackerComponent } from './workout-tracker.component';

describe('WorkoutTrackerComponent', () => {
  let component: WorkoutTrackerComponent;
  let fixture: ComponentFixture<WorkoutTrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkoutTrackerComponent]
    });
    fixture = TestBed.createComponent(WorkoutTrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
