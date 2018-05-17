import { Component, Input, ChangeDetectionStrategy, OnChanges, OnInit } from '@angular/core';
import { GoalEvaluation, GoalTypeEvaluation } from '../models/Evaluation';
import { ScoreDictionary } from '../models/score-dictionary';
import { TeamMemberService } from '../../../core/services/team-member.service';
import { TeamMember } from '../../../core/model/team-member';
import { EvaluationService } from '../services/evaluation.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-evaluation-card',
  templateUrl: './evaluation-card.component.html',
  styleUrls: ['./evaluation-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvaluationCardComponent implements OnInit, OnChanges {
  @Input() title: string;
  @Input() evaluation: GoalTypeEvaluation;
  scores: number[];

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

  constructor(private tmService: TeamMemberService, private evaluationService: EvaluationService, public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.scores = this.evaluationService.evaluationRatings;
  }

  ngOnChanges() {
    this.totalWeight = this.evaluation.GoalTypeTotalWeight;
    this.tmService.teamMember$.subscribe(data => this.teamMember = data);
    this.createScoreDictionaries(this.evaluation.GoalEvaluations);
    this.averageSelfScore = this.calculateAverageScore(this.selfScoreDictionary);
    this.averagePicScore = this.calculateAverageScore(this.picScoreDictionary);
    this.averageCommitteeScore = this.calculateAverageScore(this.committeeScoreDictionary);
    this.calculatedSelfScore = this.calculateScore(this.evaluation.ShareholderScore);
    this.calculatedPicScore = this.calculateScore(this.evaluation.PICScore);
    this.calculatedCommitteeScore = this.calculateScore(this.evaluation.ConsensusScore);
  }

  calculateScore(useScore: number) {
    const multiplier = this.totalWeight * .01;
    let score = 0;
    score = useScore * multiplier;
    return score;
  }

  selfUseScoreChanged(useScore: number) {
    this.calculatedSelfScore = this.calculateScore(useScore);
    this.updateGoalTypeEvaluation();
  }

  picUseScoreChanged(useScore: number) {
    this.calculatedPicScore = this.calculateScore(useScore);
    this.updateGoalTypeEvaluation();
  }

  committeeUseScoreChanged(useScore: number) {
    this.calculatedCommitteeScore = this.calculateScore(useScore);
    this.updateGoalTypeEvaluation();
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

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
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

  private calculateTotalWeight(evalItems: GoalEvaluation[]) {
    let weight = 0;
    for (let x = 0; x < evalItems.length; x++) {
      weight = weight + evalItems[x].GoalWeight;
    }
    return weight;
  }

  private createScoreDictionaries(evalItems: GoalEvaluation[]) {
    for (let x = 0; x < evalItems.length; x++) {
      this.selfScoreDictionary.push(this.createScoreDictionary(evalItems[x].GoalEvaluationId, evalItems[x].ShareHolderScore));
      this.picScoreDictionary.push(this.createScoreDictionary(evalItems[x].GoalEvaluationId, evalItems[x].PICScore));
      this.committeeScoreDictionary.push(this.createScoreDictionary(evalItems[x].GoalEvaluationId, evalItems[x].ConsensusScore));
    }
  }

  private createScoreDictionary(itemId: number, score: number) {
    const scoreDictionary = new ScoreDictionary();
    scoreDictionary.id = itemId;
    scoreDictionary.value = score;
    return scoreDictionary;
  }

  private updateGoalTypeEvaluation() {
    this.evaluationService.updateEvaluationGoalType(this.evaluation)
    .subscribe(data => {
      if (data) {
        this.openSnackBar('Score update saved!', '');
      }
    }, error => {
      console.error(error);
      this.openSnackBar('Error updating score. Score was not saved!', '');
    });
  }

}
