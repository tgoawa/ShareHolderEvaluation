import { Component} from '@angular/core';
import { GoalBaseComponent } from '../shared/goal-base/goal-base.component';


@Component({
  selector: 'app-goals-leadership',
  templateUrl: './goals-leadership.component.html',
  styleUrls: ['./goals-leadership.component.css']
})
export class GoalsLeadershipComponent extends GoalBaseComponent {
  goalTypeId = 6;
}
