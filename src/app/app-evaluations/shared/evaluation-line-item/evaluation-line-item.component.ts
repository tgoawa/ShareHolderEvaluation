import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { GoalEvaluation } from '../models/Evaluation';
import { ScoreDictionary } from '../models/score-dictionary';
import { EvaluationService } from '../services/evaluation.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-evaluation-line-item',
  templateUrl: './evaluation-line-item.component.html',
  styleUrls: ['./evaluation-line-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvaluationLineItemComponent implements OnInit {
  @Input() evalItem: GoalEvaluation;
  @Output() selfScore: EventEmitter<ScoreDictionary> = new EventEmitter<ScoreDictionary>();
  @Output() picScore: EventEmitter<ScoreDictionary> = new EventEmitter<ScoreDictionary>();
  @Output() committeeScore: EventEmitter<ScoreDictionary> = new EventEmitter<ScoreDictionary>();

  ratings = [ 10, 9, 8, 7, 6, 5, 4, 3, 2 , 1];
  constructor(private evaluationService: EvaluationService, public snackBar: MatSnackBar) { }

  ngOnInit() {

  }

  onSelfScoreChange() {
    const outputData = new ScoreDictionary();
    outputData.id = this.evalItem.GoalEvaluationId;
    outputData.value = this.evalItem.ShareHolderScore;
    this.updateEvaluation();
    this.selfScore.emit(outputData);
  }
  onPicScoreChange() {
    const outputData = new ScoreDictionary();
    outputData.id = this.evalItem.GoalEvaluationId;
    outputData.value = this.evalItem.PICScore;
    this.updateEvaluation();
    this.picScore.emit(outputData);
  }
  onCommitteeScoreChange() {
    const outputData = new ScoreDictionary();
    outputData.id = this.evalItem.GoalEvaluationId;
    outputData.value = this.evalItem.CommitteeScore;
    this.updateEvaluation();
    this.committeeScore.emit(outputData);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  updateEvaluation() {
    this.evaluationService.updateEvaluationGoal(this.evalItem)
    .subscribe(data => {
      if (data) {
        this.openSnackBar('Score update saved!', '');
      }
    }, error => {
      console.error(error);
      this.openSnackBar('Error updating score. Score was not saved!', '');
    });
  }

}
