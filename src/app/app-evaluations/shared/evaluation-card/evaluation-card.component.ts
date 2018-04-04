import { Component, Input, ChangeDetectionStrategy, OnChanges, OnInit } from '@angular/core';
import { EvaluationItem, EvaluationData } from '../models/Evaluation';
import { ScoreDictionary } from '../models/score-dictionary';
import { TeamMemberService } from '../../../core/services/team-member.service';
import { TeamMember } from '../../../core/model/team-member';

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
    10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0
  ];

  averageSelfScore: number;
  averagePicScore: number;
  averageCommitteeScore: number;
  calculatedSelfScore: number;
  calculatedPicScore: number;
  calculatedCommitteeScore: number;
  currentScore = 10;
  teamMember: TeamMember;
  selfUseScore: number;
  picUseScore: number;
  committeeUseScore: number;
  totalWeight: number;
  private selfScoreDictionary: ScoreDictionary[] = [];
  private picScoreDictionary: ScoreDictionary[] = [];
  private committeeScoreDictionary: ScoreDictionary[] = [];

  constructor(private tmService: TeamMemberService) { }

  ngOnInit() {
    this.tmService.teamMember$.subscribe(data => this.teamMember = data);
    this.selfUseScore = this.evaluation.SelfUseScore;
    this.picUseScore = this.evaluation.PICUseScore;
    this.committeeUseScore = this.evaluation.CommitteeUseScore;
    this.createScoreDictionaries(this.evaluation.EvaluationItems);
    this.averageSelfScore = this.calculateAverageScore(this.selfScoreDictionary);
    this.averagePicScore = this.calculateAverageScore(this.picScoreDictionary);
    this.averageCommitteeScore = this.calculateAverageScore(this.committeeScoreDictionary);
    this.calculatedSelfScore = this.calculateScore(this.selfUseScore);
    this.calculatedPicScore = this.calculateScore(this.picUseScore);
    this.calculatedCommitteeScore = this.calculateScore(this.committeeUseScore);
  }

  ngOnChanges() {
    this.totalWeight = this.calculateTotalWeight(this.evaluation.EvaluationItems);
  }

  calculateScore(useScore: number) {
    const multiplier = this.totalWeight * .01;
    let score = 0;
    score = useScore * multiplier;
    return score;
  }

  selfUseScoreChanged(useScore: number) {
    this.calculatedSelfScore = this.calculateScore(useScore);
  }

  picUseScoreChanged(useScore: number) {
    this.calculatedPicScore = this.calculateScore(useScore);
  }

  committeeUseScoreChanged(useScore: number) {
    this.calculatedCommitteeScore = this.calculateScore(useScore);
  }

  selfScoreChanged(val: ScoreDictionary) {
    for (let x = 0; x < this.selfScoreDictionary.length; x++) {
      if (val.id === this.selfScoreDictionary[x].id) {
        this.selfScoreDictionary[x].value = val.value;
        break;
      }
    }
    this.averageSelfScore = this.calculateAverageScore(this.selfScoreDictionary);
  }

  picScoreChanged(val: ScoreDictionary) {
    for (let x = 0; x < this.picScoreDictionary.length; x++) {
      if (val.id === this.picScoreDictionary[x].id) {
        this.picScoreDictionary[x].value = val.value;
        break;
      }
    }
    this.averagePicScore = this.calculateAverageScore(this.picScoreDictionary);
  }

  committeeScoreChanged(val: ScoreDictionary) {
    for (let x = 0; x < this.committeeScoreDictionary.length; x++) {
      if (val.id === this.committeeScoreDictionary[x].id) {
        this.committeeScoreDictionary[x].value = val.value;
        break;
      }
    }
    this.averageCommitteeScore = this.calculateAverageScore(this.committeeScoreDictionary);
  }

  private calculateAverageScore(scoreData: ScoreDictionary[]) {
    const totalScore = this.calculateTotalScore(scoreData);
    const length = scoreData.length;
    const averageScore = totalScore / length;
    return averageScore;
  }

  private calculateTotalScore(scoreData: ScoreDictionary[]) {
    let score = 0;
    for (let x = 0; x < scoreData.length; x++) {
      score = score + scoreData[x].value;
    }
    return score;
  }

  private calculateTotalWeight(evalItems: EvaluationItem[]) {
    let weight = 0;
    for (let x = 0; x < evalItems.length; x++) {
      weight = weight + evalItems[x].GoalWeight;
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
