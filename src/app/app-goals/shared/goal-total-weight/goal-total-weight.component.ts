import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { GoalData } from '../../models/goal';
import { GoalWeightModel } from '../../goals-main/model/weight';

@Component({
  selector: 'app-goal-total-weight',
  templateUrl: './goal-total-weight.component.html',
  styleUrls: ['./goal-total-weight.component.css']
})
export class GoalTotalWeightComponent implements OnInit, OnChanges {
  @Input() goalData: GoalData[];
  totalWeight: number;
  weightDataDictionary: GoalWeightModel[];
  constructor() { }

  ngOnInit() {
    this.weightDataDictionary = this.createWeightDataDictionary(this.goalData);
    this.totalWeight = this.calculateTotalWeight(this.weightDataDictionary);
  }

  ngOnChanges() {
    this.weightDataDictionary = this.createWeightDataDictionary(this.goalData);
    this.totalWeight = this.calculateTotalWeight(this.weightDataDictionary);
  }

  calculateTotalWeight(goals: GoalWeightModel[]): number {
    let calculatedWeight = 0;
    for (let x = 0; x < goals.length; x++) {
      calculatedWeight = calculatedWeight + goals[x].GoalWeight;
    }
    return calculatedWeight;
  }

  createWeightDataDictionary(goalData: GoalData[]) {
    const dataDictionary = [];
    for (let x = 0; x < goalData.length; x++) {
      const goalWeightModel = new GoalWeightModel(goalData[x].GoalId, goalData[x].Weight);
      dataDictionary.push(goalWeightModel);
    }
    return dataDictionary;
  }

}
