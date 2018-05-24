import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { EvaluationModel } from '../../shared/models/Evaluation';
import { PowerLevel } from '../../shared/models/powerLevel';
import { EvaluationService } from '../../shared/services/evaluation.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() evaluationData: EvaluationModel;
  @Input() powerLevelDropdown: PowerLevel[];
  canUpdate = false;

  consensusScoreArray: number[];
  picScoreArray: number[];
  shareholderScoreArray: number[];
  powerRating: string;
  scores: number[];
  totalConsensusScore: Number = 0;
  totalPicScore: Number = 0;
  totalShareholderScore: Number = 0;
  constructor(private evaluationService: EvaluationService,
    public snackBar: MatSnackBar,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.getPowerLevelDropdown();
    this.scores = this.evaluationService.evaluationRatings;
    this.shareholderScoreArray = [];
    this.picScoreArray = [];
    this.consensusScoreArray = [];
    this.canUpdateTotalScore(this.evaluationData);
    this.setPowerRating();
  }

  addToShareholderScoreArray(score: number) {
    this.shareholderScoreArray.push(score);
    this.totalShareholderScore = this.addTotalScore(this.shareholderScoreArray);
    this.cd.detectChanges();
  }

  addToPICScoreArray(score: number) {
    this.picScoreArray.push(score);
    this.totalPicScore = this.addTotalScore(this.picScoreArray);
    this.cd.detectChanges();
  }

  addToConsensusScoreArray(score: number) {
    this.consensusScoreArray.push(score);
    this.totalConsensusScore = this.addTotalScore(this.consensusScoreArray);
    this.cd.detectChanges();
  }

  updateEvaluation() {
    this.evaluationService.updateEvaluationTotalScore(this.evaluationData)
    .subscribe(data => {
      if (data) {
        this.openSnackBar('Score update saved!', '');
      }
    }, error => {
      console.error(error);
      this.openSnackBar('Error updating score. Score was not saved!', '');
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  private addTotalScore(scoreArray: number[]): number {
    let score = 0;
    for (let x = 0; x < scoreArray.length; x++) {
      score = score + scoreArray[x];
    }
    return score;
  }

  private canUpdateTotalScore(evalData: EvaluationModel) {
    for (let x = 0; x < evalData.EvaluationTypes.length; x++) {
      if (evalData.EvaluationTypes[x].ShareholderScore === 0) {
        this.canUpdate = false;
        break;
      } else if (evalData.EvaluationTypes[x].PICScore === 0) {
        this.canUpdate = false;
        break;
      } else if (evalData.EvaluationTypes[x].ConsensusScore === 0) {
        this.canUpdate = false;
        break;
      } else {
        this.canUpdate = true;
      }
    }
  }

  private getPowerLevelDropdown() {
    this.evaluationService.getPowerLevels()
    .subscribe(data => {
      this.powerLevelDropdown = data;
    }, error => {
      console.error(error);
    });
  }

  private setPowerRating() {
    for (let x = 0; x < this.powerLevelDropdown.length; x++) {
      if (this.evaluationData.PowerLevelId === this.powerLevelDropdown[x].PowerLevelId) {
        this.powerRating = this.powerLevelDropdown[x].PowerValue;
        break;
      }
    }
  }
}
