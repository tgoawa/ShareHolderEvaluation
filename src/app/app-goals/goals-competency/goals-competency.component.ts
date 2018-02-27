import { Component } from '@angular/core';
import { GoalBaseComponent } from '../shared/goal-base/goal-base.component';

@Component({
  selector: 'app-goals-competency',
  templateUrl: './goals-competency.component.html',
  styleUrls: ['./goals-competency.component.css'],
})
export class GoalsCompetencyComponent extends GoalBaseComponent {
  goalTypeId = 7;
}
