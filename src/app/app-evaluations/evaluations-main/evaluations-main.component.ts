import { Component, OnInit } from '@angular/core';
import { YearSelectionService } from '../../core/services/year-selection.service';
import { EvaluationService } from '../shared/services/evaluation.service';
import { EvaluationModel } from '../shared/models/Evaluation';

@Component({
  selector: 'app-evaluations-main',
  templateUrl: './evaluations-main.component.html',
  styleUrls: ['./evaluations-main.component.css']
})
export class EvaluationsMainComponent implements OnInit {
  totalScore: Number;
  evaluationData: EvaluationModel;
  teamMemberId = 1936;
  year: number;
  constructor(private yearService: YearSelectionService, private evaluationService: EvaluationService) { }

  ngOnInit() {
    this.yearService.selectedYear$.subscribe(data => {
      this.year = data;
      this.getEvaluations(this.teamMemberId, this.year);
    });
  }

  getEvaluations(teamMemberId: number, year: number) {
    this.evaluationService.getEvaluationModel(teamMemberId, year)
    .subscribe(data => {
      this.evaluationData = data;
    }, error => {
      console.error('Could not bind evaluation model to view');
    });
  }

  // createScoreDataDictionary() {
  //   const dataDictionary = [];
  //   for (let x = 0; x < this.evaluations.length; x++) {
  //     this.evalScoreData = new ScoreData(this.evaluations[x].EvaluationTypeId, 0);
  //     dataDictionary.push(this.evalScoreData);
  //   }
  //   return dataDictionary;
  // }

  // assignScoreTotal(evalData: ScoreData) {
  //   for (let x = 0; x < this.scoreDataDictionary.length; x++) {
  //     if (evalData.Id === this.scoreDataDictionary[x].Id) {
  //       this.scoreDataDictionary[x].Score = evalData.Score;
  //     }
  //   }
  //   this.totalScore = this.calculateTotalScore();
  // }

  // calculateTotalScore() {
  //   let calculateScore = 0;
  //   for (let x = 0; x < this.scoreDataDictionary.length; x++) {
  //     calculateScore = calculateScore + this.scoreDataDictionary[x].Score;
  //   }
  //   return calculateScore;
  // }

}
