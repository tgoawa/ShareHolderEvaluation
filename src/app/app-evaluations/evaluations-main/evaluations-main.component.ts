import { Component, OnInit } from '@angular/core';
import { Evaluations } from './models/evaluations';
import { ScoreData } from './models/score';
import { YearSelectionService } from '../../core/services/year-selection.service';

@Component({
  selector: 'app-evaluations-main',
  templateUrl: './evaluations-main.component.html',
  styleUrls: ['./evaluations-main.component.css']
})
export class EvaluationsMainComponent implements OnInit {
  totalScore: Number;
  evaluations: Evaluations[];
  evalScoreData: ScoreData;
  scoreDataDictionary: ScoreData[];
  year: number;
  constructor(private yearService: YearSelectionService) { }

  ngOnInit() {
    this.yearService.selectedYear$.subscribe(data => {
      this.year = data;
    });
  }

  getEvaluations() {
  }

  createScoreDataDictionary() {
    const dataDictionary = [];
    for (let x = 0; x < this.evaluations.length; x++) {
      this.evalScoreData = new ScoreData(this.evaluations[x].EvaluationTypeId, 0);
      dataDictionary.push(this.evalScoreData);
    }
    return dataDictionary;
  }

  assignScoreTotal(evalData: ScoreData) {
    for (let x = 0; x < this.scoreDataDictionary.length; x++) {
      if (evalData.Id === this.scoreDataDictionary[x].Id) {
        this.scoreDataDictionary[x].Score = evalData.Score;
      }
    }
    this.totalScore = this.calculateTotalScore();
  }

  calculateTotalScore() {
    let calculateScore = 0;
    for (let x = 0; x < this.scoreDataDictionary.length; x++) {
      calculateScore = calculateScore + this.scoreDataDictionary[x].Score;
    }
    return calculateScore;
  }

}
