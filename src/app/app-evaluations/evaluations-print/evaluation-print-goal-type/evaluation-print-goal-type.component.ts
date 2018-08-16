import { Component, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { GoalTypeEvaluation } from '../../shared/models/Evaluation';

@Component({
  selector: 'app-evaluation-print-goal-type',
  templateUrl: './evaluation-print-goal-type.component.html',
  styleUrls: ['./evaluation-print-goal-type.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvaluationPrintGoalTypeComponent implements OnChanges {
  @Input() data: GoalTypeEvaluation;
  @Input() goalTypeName: string;

  constructor() { }

  ngOnChanges() {
  }

}
