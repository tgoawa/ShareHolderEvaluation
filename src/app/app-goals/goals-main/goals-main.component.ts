import { Component, OnInit } from '@angular/core';

import { landingPageData } from '../mock-data/mock-goal-data';
import { Goals } from './model/goals';
import { GoalWeightData } from './model/weight';
import { GoalsService } from '../shared/services/goals.service';
import { DashboardModel } from './model/dashboard.model';

@Component({
  selector: 'app-goals-main',
  templateUrl: './goals-main.component.html',
  styleUrls: ['./goals-main.component.css']
})
export class GoalsMainComponent implements OnInit {
  totalWeight: number;
  goals: DashboardModel[];
  goalWeightData: GoalWeightData;
  weightDataDictionary: GoalWeightData[];

  constructor(private goalService: GoalsService) { }

  ngOnInit() {
    this.totalWeight = 0;
    this.getGoals(1936);
  }

  getGoals(teamMemberId: number) {
    this.goalService.getGoals(teamMemberId)
    .subscribe(data => {
      this.goals = data;
      this.weightDataDictionary = this.createWeightDataDictionary();
    }, error => {
      console.log('Could not bind goal data to view');
    });
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
