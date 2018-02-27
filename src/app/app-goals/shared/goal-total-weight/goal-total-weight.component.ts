import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GoalWeightModel } from '../../goals-main/model/weight';

@Component({
  selector: 'app-goal-total-weight',
  templateUrl: './goal-total-weight.component.html',
  styleUrls: ['./goal-total-weight.component.css']
})
export class GoalTotalWeightComponent implements OnInit, OnChanges {
  @Input() goalWeightModel: GoalWeightModel[];
  totalWeight: number;
  constructor() { }

  ngOnInit() {
    this.totalWeight = this.calculateTotalWeight(this.goalWeightModel);
  }

  ngOnChanges() {
    this.totalWeight = this.calculateTotalWeight(this.goalWeightModel);
  }

  calculateTotalWeight(goals: GoalWeightModel[]): number {
    let calculatedWeight = 0;
    for (let x = 0; x < goals.length; x++) {
      calculatedWeight = calculatedWeight + goals[x].GoalWeight;
    }
    return calculatedWeight;
  }

}
