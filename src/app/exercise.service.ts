import { Injectable } from '@angular/core';
import { Exercise } from './exercise.model';

@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private exercises: Exercise[] = [
    {
name: 'Bodyweight Reverse Lunge',
description: 'Take a big step backwards with your left leg, lowering your body until your left thigh is parallel to the ground and your right knee is bent at a 90-degree angle.Push through your right heel to return to standing, bringing your left leg back to starting position.Repeat the movement on the other side, stepping backwards with your right leg and lowering your body until your right thigh is parallel to the ground and your left knee is bent at a 90-degree angle.',
muscleGroup: 'Hamstrings, Quads' },
{ name: 'Forearm Plank',
description: 'Place forearms on the ground with your elbows bent at a 90° angle aligned beneath your shoulders, with your arms parallel at shoulder-width.Your feet should be together, with only your toes touching the floor.Lift your belly off the floor and form a straight line from your heels to the crown of your head and hold.',
muscleGroup: 'Abdominals' },
{ name: 'Decline Push Up',
description: 'Use a bench to elevate your feet.Put your hands slightly wider than shoulder-width.Slowly lower your body until your chest almost touches the ground.Raise your body until you almost lock your elbows.',
muscleGroup: 'Chest' },
{ name: 'Supermans',
description: 'Lie face down on the floor with your arms fully extended in front of you.Simultaneously raise your arms, legs and chest off of the floor and hold the position.Slowly lower your arms, legs and chest back to the starting position. Repeat.',
muscleGroup: 'Lower back' },
{ name: 'Glute Bridge',
description: 'Lie down with your knees bent and your feet flat on the floor.Push your hips up so that your butt is elevated and your back straight.Tense your glutes and raise your hips towards the ceiling.Once you are at the highest point you can manage, hold the position for a few seconds, and then slowly return to the starting position',
muscleGroup: 'Glutes' },
{ name: 'Burpee',
description: 'Start standing with your feet hip-width apart. Lower your body into a squat position, placing your hands on the ground in front of you.Quickly jump your feet back into a plank position, keeping your body in a straight line from your head to your toes.Perform a push-up, keeping your core tight and your elbows close to your body.Jump your feet back towards your hands, and then jump up into the air, reaching your arms overhead.Land softly and immediately lower your body back into the squat position to repeat the movement.',
muscleGroup: 'Abdominals, Glutes, Quads, Chest' },
  ];

  getExercises(): Exercise[] {
    return this.exercises;
  }
}
