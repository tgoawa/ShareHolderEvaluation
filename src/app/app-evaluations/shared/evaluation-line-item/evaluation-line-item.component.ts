import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { GoalEvaluation } from '../models/Evaluation';
import { ScoreDictionary } from '../models/score-dictionary';
import { EvaluationService } from '../services/evaluation.service';
import { MatSnackBar, MatDialog, MatDialogConfig } from '@angular/material';
import { GoalDescriptionDialogComponent } from '../goal-description-dialog/goal-description-dialog.component';

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

  ratings: number[];
  constructor(private evaluationService: EvaluationService, public snackBar: MatSnackBar, private dialog: MatDialog) { }

  ngOnInit() {
    this.ratings = this.evaluationService.evaluationRatings;
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
    outputData.value = this.evalItem.ConsensusScore;
    this.updateEvaluation();
    this.committeeScore.emit(outputData);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.data = {
      goalName: this.evalItem.GoalName,
      goalDescription: this.evalItem.GoalDescription
    };

    this.dialog.open(GoalDescriptionDialogComponent, dialogConfig);
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
