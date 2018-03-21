import { Component, Input, ChangeDetectionStrategy, OnChanges, OnInit } from '@angular/core';
import { EvaluationItem, EvaluationData } from '../models/Evaluation';
import { ScoreDictionary } from '../models/score-dictionary';

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
  private selfScoreDictionary: ScoreDictionary[] = [];
  private picScoreDictionary: ScoreDictionary[] = [];
  private committeeScoreDictionary: ScoreDictionary[] = [];

  constructor() { }

  ngOnInit() {
    this.selfUseScore = this.evaluation.SelfUseScore;
    this.picUseScore = this.evaluation.PICUseScore;
    this.committeeUseScore = this.evaluation.CommitteeUseScore;
    this.createScoreDictionaries(this.evaluation.EvaluationItems);
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

  private createScoreDictionaries(evalItems: EvaluationItem[]) {
    for (let x = 0; x < evalItems.length; x++) {
      this.selfScoreDictionary.push(this.createScoreDictionary(evalItems[x].ItemId, evalItems[x].SelfScore));
      this.picScoreDictionary.push(this.createScoreDictionary(evalItems[x].ItemId, evalItems[x].PICScore));
      this.committeeScoreDictionary.push(this.createScoreDictionary(evalItems[x].ItemId, evalItems[x].CommitteeScore));
    }
  }

  private createScoreDictionary(itemId: number, score: number) {
    const scoreDictionary = new ScoreDictionary();
    scoreDictionary.id = itemId;
    scoreDictionary.value = score;
    return scoreDictionary;
  }

}
