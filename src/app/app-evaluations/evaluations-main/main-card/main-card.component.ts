import { Component, OnInit, Input, EventEmitter, Output, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { GoalTypeEvaluation } from '../../shared/models/Evaluation';


@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent implements OnInit, AfterViewInit {
  @Input() data: GoalTypeEvaluation;
  @Input() name: string;
  @Input() route: string;
  routeName: string;
  shareholderScore: number;
  picScore: number;
  finalReviewScore: number;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.routeName = this.name.toLocaleLowerCase();
  }

  ngAfterViewInit() {
    this.finalReviewScore = this.calculateWeightedScore(this.data.GoalTypeTotalWeight, this.data.CommitteeScore);
    this.picScore = this.calculateWeightedScore(this.data.GoalTypeTotalWeight, this.data.PICScore);
    this.shareholderScore = this.calculateWeightedScore(this.data.GoalTypeTotalWeight, this.data.ShareholderScore);
    this.cd.detectChanges();
  }

  calculateWeightedScore(weight: number, enteredScore: number): number {
    const multiplier = weight * .01;
    let score = 0;
    score = enteredScore * multiplier;
    return score;
  }

}
