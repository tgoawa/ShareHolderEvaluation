import { Component, Input, ChangeDetectionStrategy, OnChanges, OnInit } from '@angular/core';
import { EvaluationItem, EvaluationData } from '../models/Evaluation';

@Component({
  selector: 'app-evaluation-card',
  templateUrl: './evaluation-card.component.html',
  styleUrls: ['./evaluation-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvaluationCardComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() evaluation: EvaluationData;
  scores = [
    10, 9, 8, 7, 6, 5, 4, 3, 2, 1
  ];
  currentScore = 10;
  selfUseScore: number;
  picUseScore: number;
  committeeUseScore: number;
  totalWeight: number;
  constructor() { }

  ngOnInit() {
    this.selfUseScore = this.evaluation.SelfUseScore;
    this.picUseScore = this.evaluation.PICUseScore;
    this.committeeUseScore = this.evaluation.CommitteeUseScore;
  }

  ngOnChanges() {
    this.totalWeight = this.calculateTotalWeight(this.evaluation.EvaluationItems);
  }

  private calculateTotalWeight(evalItems: EvaluationItem[]) {
    let weight = 0;
    for (let x = 0; x < evalItems.length; x++) {
      weight = weight + evalItems[x].Weight;
    }
    return weight;
  }

}
