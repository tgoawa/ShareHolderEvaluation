import { Component, OnInit, Input, EventEmitter, Output, AfterViewInit } from '@angular/core';
import { ScoreData } from '../models/score';
import { Evaluations } from '../models/evaluations';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit, AfterViewInit {
  @Input() data: Evaluations;
  @Input() route: string;
  @Output() evalScoreData: EventEmitter<ScoreData> = new EventEmitter<ScoreData>();
  outputData: ScoreData;
  totalScore: number;
  routeName: string;

  constructor() { }

  ngOnInit() {
    this.routeName = this.data.Name.toLocaleLowerCase();
    this.totalScore = this.calculateTotalScore();
  }

  ngAfterViewInit() {
    this.sendScoreData();
  }

  calculateTotalScore() {
    const data = this.data.Evaluations;
    let value = 0;
    for (let x = 0; x < data.length; x++) {
      if (data[x].Score !== null) {
        value = value + data[x].Score;
      }
    }
    return value;
  }

  updateTotalScore() {
    this.totalScore = this.calculateTotalScore();
    this.sendScoreData();
  }

  sendScoreData() {
    this.outputData = new ScoreData(this.data.EvaluationTypeId, this.totalScore);
    this.evalScoreData.emit(this.outputData);
  }

}
