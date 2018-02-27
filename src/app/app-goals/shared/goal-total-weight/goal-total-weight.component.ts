import { Component, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { GoalWeightModel } from '../../goals-main/model/weight';

@Component({
  selector: 'app-goal-total-weight',
  templateUrl: './goal-total-weight.component.html',
  styleUrls: ['./goal-total-weight.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalTotalWeightComponent implements OnChanges {
  @Input() goalWeightModel: GoalWeightModel[];
  totalWeight: number;
  constructor() { }

  ngOnChanges() {
    this.totalWeight = this.calculateTotalWeight(this.goalWeightModel);
  }

  calculateTotalWeight(goalWeightModel: GoalWeightModel[]): number {
    let calculatedWeight = 0;
    for (let x = 0; x < goalWeightModel.length; x++) {
      calculatedWeight = calculatedWeight + goalWeightModel[x].GoalWeight;
    }
    return calculatedWeight;
  }

}
