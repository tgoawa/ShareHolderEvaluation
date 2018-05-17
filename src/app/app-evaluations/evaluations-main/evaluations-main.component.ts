import { Component, OnInit, AfterViewInit } from '@angular/core';
import { YearSelectionService } from '../../core/services/year-selection.service';
import { EvaluationService } from '../shared/services/evaluation.service';
import { EvaluationModel } from '../shared/models/Evaluation';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material';
import { PowerLevel } from '../shared/models/powerLevel';

@Component({
  selector: 'app-evaluations-main',
  templateUrl: './evaluations-main.component.html',
  styleUrls: ['./evaluations-main.component.css']
})
export class EvaluationsMainComponent implements OnInit {
  consensusScoreArray: number[];
  picScoreArray: number[];
  shareholderScoreArray: number[];

  evaluationData: EvaluationModel;

  powerLevelDropdown: PowerLevel;
  scores: number[];
  teamMemberId = 1936;
  totalConsensusScore: Number = 0;
  totalPicScore: Number = 0;
  totalShareholderScore: Number = 0;
  year: number;
  constructor(private yearService: YearSelectionService, private evaluationService: EvaluationService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getPowerLevelDropdown();
    this.scores = this.evaluationService.evaluationRatings;
    this.yearService.selectedEvalYear$.subscribe(data => {
      this.year = data;
      this.evaluationService.getEvaluationModel(this.teamMemberId, this.year);
    });

    this.evaluationService.evaluationModel$.subscribe(data => {
      this.evaluationData = data;
    }, error => console.error('Could not bind data to view'));
    this.shareholderScoreArray = [];
    this.picScoreArray = [];
    this.consensusScoreArray = [];
  }

  addToShareholderScoreArray(score: number) {
    this.shareholderScoreArray.push(score);
    this.totalShareholderScore = this.addTotalScore(this.shareholderScoreArray);
  }

  addToPICScoreArray(score: number) {
    this.picScoreArray.push(score);
    this.totalPicScore = this.addTotalScore(this.picScoreArray);
  }

  addToConsensusScoreArray(score: number) {
    this.consensusScoreArray.push(score);
    this.totalConsensusScore = this.addTotalScore(this.consensusScoreArray);
  }

  updateEvaluation() {
    this.evaluationService.updateEvaluation(this.evaluationData)
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

  private getPowerLevelDropdown() {
    this.evaluationService.getPowerLevels()
    .subscribe(data => {
      this.powerLevelDropdown = data;
    }, error => {
      console.error(error);
    });
  }

}
