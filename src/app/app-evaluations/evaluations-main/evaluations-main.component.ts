import { Component, OnInit, AfterViewInit } from '@angular/core';
import { YearSelectionService } from '../../core/services/year-selection.service';
import { EvaluationService } from '../shared/services/evaluation.service';
import { EvaluationModel } from '../shared/models/Evaluation';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-evaluations-main',
  templateUrl: './evaluations-main.component.html',
  styleUrls: ['./evaluations-main.component.css']
})
export class EvaluationsMainComponent implements OnInit {
  totalConsensusScore: Number = 0;
  totalPicScore: Number = 0;
  totalShareholderScore: Number = 0;
  shareholderScoreArray: number[];
  picScoreArray: number[];
  consensusScoreArray: number[];
  evaluationData: EvaluationModel;
  teamMemberId = 1936;
  year: number;
  constructor(private yearService: YearSelectionService, private evaluationService: EvaluationService) { }

  ngOnInit() {
    this.yearService.selectedYear$.subscribe(data => {
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

  private addTotalScore(scoreArray: number[]): number {
    let score = 0;
    for (let x = 0; x < scoreArray.length; x++) {
      score = score + scoreArray[x];
    }
    return score;
  }

}
