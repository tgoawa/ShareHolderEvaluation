import { Component, OnInit } from '@angular/core';

import { landingPageData } from '../mock-data/mock-goal-data';
import { Goals } from './model/goals';
import { GoalWeightData } from './model/weight';

@Component({
  selector: 'app-goals-main',
  templateUrl: './goals-main.component.html',
  styleUrls: ['./goals-main.component.css']
})
export class GoalsMainComponent implements OnInit {
  totalWeight: number;
  goals: Goals[];
  goalWeightData: GoalWeightData;
  weightDataDictionary: GoalWeightData[];
  constructor() { }

  ngOnInit() {
    this.goals = landingPageData;
    this.weightDataDictionary = this.createWeightDataDictionary();
    this.totalWeight = 0;
  }

  getGoals() {
    return landingPageData;
  }

  createWeightDataDictionary() {
    const dataDictionary = [];
    for (let x = 0; x < this.goals.length; x++) {
      this.goalWeightData = new GoalWeightData(this.goals[x].GoalTypeId, 0);
      dataDictionary.push(this.goalWeightData);
    }
    return dataDictionary;
  }

  assignWeightTotal(goalData: GoalWeightData) {
    for (let x = 0; x < this.weightDataDictionary.length; x++) {
      if (goalData.Id === this.weightDataDictionary[x].Id) {
        this.weightDataDictionary[x].Weight = goalData.Weight;
      }
    }
    this.totalWeight = this.calculateTotalWeight();
  }

  calculateTotalWeight() {
    let calculatedWeight = 0;
    for (let x = 0; x < this.weightDataDictionary.length; x++) {
      calculatedWeight = calculatedWeight + this.weightDataDictionary[x].Weight;
    }
    return calculatedWeight;
  }

}
