import { Component, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { PowerLevel } from '../../shared/models/powerLevel';
import { EvaluationModel } from '../../shared/models/Evaluation';

@Component({
  selector: 'app-evaluation-print-summary',
  templateUrl: './evaluation-print-summary.component.html',
  styleUrls: ['./evaluation-print-summary.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvaluationPrintSummaryComponent implements OnChanges {
  @Input() evalData: EvaluationModel;

  finalScore: number;
  shareHolderScore: number;
  picScore: number;
  consensusScore: number;
  powerLevel: PowerLevel;
  constructor() { }

  ngOnChanges() {
  }

  private mapScores() {
    this.finalScore = this.evalData.EvaluationScore;

  }

}
