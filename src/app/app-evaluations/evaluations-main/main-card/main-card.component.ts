import { Component, OnInit } from '@angular/core';
import { ScoreData } from '../models/score';
import { Evaluations } from '../models/evaluations';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit {
  totalScore: number;
  evaluations: Evaluations[];
  goalScoreData: ScoreData;
  scoreDataDictionary: ScoreData[];
  constructor() { }

  ngOnInit() {
  }

  getEvaluations() {

  }

  createScoreDataDictionary() {
    const dataDictionary = [];
    for (let x = 0; x < this.evaluations.length; x++) {
      this.goalScoreData = new ScoreData(this.evaluations[x].GoalTypeId, 0);
      dataDictionary.push(this.goalScoreData);
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
    let calculatedScore = 0;
    for (let x = 0; x < this.scoreDataDictionary.length; x++) {
      calculatedScore = calculatedScore + this.scoreDataDictionary[x].Score;
    }
    return calculatedScore;
  }

}
