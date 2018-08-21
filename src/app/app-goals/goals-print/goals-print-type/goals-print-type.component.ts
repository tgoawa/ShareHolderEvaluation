import { Component, Input } from '@angular/core';
import { GoalBaseComponent } from '../../shared/goal-base/goal-base.component';

@Component({
  selector: 'app-goals-print-type',
  templateUrl: './goals-print-type.component.html',
  styleUrls: ['./goals-print-type.component.css']
})
export class GoalsPrintTypeComponent extends GoalBaseComponent {
@Input() title: string;
@Input() goalTypeId: number;
}
