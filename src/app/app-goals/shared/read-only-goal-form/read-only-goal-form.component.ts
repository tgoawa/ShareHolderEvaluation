import { Component, OnInit } from '@angular/core';
import { GoalFormCardComponent } from '../goal-form-card/goal-form-card.component';

@Component({
  selector: 'app-read-only-goal-form',
  templateUrl: './read-only-goal-form.component.html',
  styleUrls: ['./read-only-goal-form.component.css']
})
export class ReadOnlyGoalFormComponent extends GoalFormCardComponent {

}
