import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Goal } from '../../goals-main/model/goals';

@Component({
  selector: 'app-goal-total-weight',
  templateUrl: './goal-total-weight.component.html',
  styleUrls: ['./goal-total-weight.component.css']
})
export class GoalTotalWeightComponent implements OnInit, OnChanges {
  @Input() goalListWeights: Goal[];
  totalWeight: number;
  weightDataDictionary: Goal[];
  constructor() { }

  ngOnInit() {
    this.weightDataDictionary = this.createWeightDataDictionary(this.goalListWeights);
    this.totalWeight = this.calculateTotalWeight(this.goalListWeights);
  }

  ngOnChanges() {
    this.totalWeight = this.calculateTotalWeight(this.goalListWeights);
  }

  calculateTotalWeight(goals: Goal[]): number {
    let calculatedWeight = 0;
    for (let x = 0; x < goals.length; x++) {
      calculatedWeight = calculatedWeight + goals[x].Weight;
    }
    return calculatedWeight;
  }

    createWeightDataDictionary(goalListWeights: Goal[]) {
    const dataDictionary = [];
    for (let x = 0; x < goalListWeights.length; x++) {
      const goalWeightData = new Goal();
      goalWeightData.Id = goalListWeights[x].Id;
      goalWeightData.Weight = goalListWeights[x].Weight;
      dataDictionary.push(goalWeightData);
    }
    return dataDictionary;
  }

}
