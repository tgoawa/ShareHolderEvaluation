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
  @Output() consensusScore: EventEmitter<Number> = new EventEmitter<Number>();
  @Output() picScore: EventEmitter<Number> = new EventEmitter<Number>();
  @Output() shareholderScore: EventEmitter<Number> = new EventEmitter<Number>();
  routeName: string;
  finalShareHolderScore: number;
  finalPicScore: number;
  finalReviewScore: number;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.routeName = this.name.toLocaleLowerCase();
  }

  ngAfterViewInit() {
    this.finalReviewScore = this.calculateWeightedScore(this.data.GoalTypeTotalWeight, this.data.ConsensusScore);
    this.finalPicScore = this.calculateWeightedScore(this.data.GoalTypeTotalWeight, this.data.PICScore);
    this.finalShareHolderScore = this.calculateWeightedScore(this.data.GoalTypeTotalWeight, this.data.ShareholderScore);
    this.consensusScore.emit(this.finalReviewScore);
    this.picScore.emit(this.finalPicScore);
    this.shareholderScore.emit(this.finalShareHolderScore);
    this.cd.detectChanges();
  }

  private calculateWeightedScore(weight: number, enteredScore: number): number {
    const multiplier = weight * .01;
    let score = 0;
    score = enteredScore * multiplier;
    return score;
  }

}
