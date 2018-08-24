import { Component, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { GoalEvaluation } from '../../../shared/models/Evaluation';

@Component({
  selector: 'app-evaluation-print-goal',
  templateUrl: './evaluation-print-goal.component.html',
  styleUrls: ['./evaluation-print-goal.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvaluationPrintGoalComponent implements OnChanges {
  @Input() data: GoalEvaluation;
  constructor() { }

  ngOnChanges() {
  }

}
