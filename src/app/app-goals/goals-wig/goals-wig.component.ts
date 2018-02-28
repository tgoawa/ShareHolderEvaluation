import { GoalBaseComponent } from '../shared/goal-base/goal-base.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-goals-wig',
  templateUrl: './goals-wig.component.html',
  styleUrls: ['./goals-wig.component.css'],
})
export class GoalsWigComponent extends GoalBaseComponent {
  goalTypeId = 4;

}
