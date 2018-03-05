import { Component, OnInit } from '@angular/core';

import { Goals } from './model/goals';
import { GoalTypeWeightData } from './model/weight';
import { GoalsService } from '../shared/services/goals.service';
import { DashboardModel } from './model/dashboard.model';

@Component({
  selector: 'app-goals-main',
  templateUrl: './goals-main.component.html',
  styleUrls: ['./goals-main.component.css']
})
export class GoalsMainComponent implements OnInit {
  totalWeight: number;
  dashboardModels: DashboardModel[];
  weightDataDictionary: GoalTypeWeightData[];
  year = 2018;

  constructor(private goalService: GoalsService) { }

  ngOnInit() {
    this.totalWeight = 0;
    this.getGoals(1936, this.year);
  }

  getGoals(teamMemberId: number, year: number) {
    this.goalService.getDashboardGoals(teamMemberId, year)
    .subscribe(data => {
      this.dashboardModels = data;
      this.weightDataDictionary = this.createWeightDataDictionary();
    }, error => {
      console.log('Could not bind goal data to view');
    });
  }

  createWeightDataDictionary() {
    const dataDictionary = [];
    for (let x = 0; x < this.dashboardModels.length; x++) {
      const goalTypeWeightData = new GoalTypeWeightData(this.dashboardModels[x].GoalTypeId, 0);
      dataDictionary.push(goalTypeWeightData);
    }
    return dataDictionary;
  }

  assignWeightTotal(goalTypeWeightData: GoalTypeWeightData) {
    for (let x = 0; x < this.weightDataDictionary.length; x++) {
      if (goalTypeWeightData.GoalTypeId === this.weightDataDictionary[x].GoalTypeId) {
        this.weightDataDictionary[x].GoalWeight = goalTypeWeightData.GoalWeight;
      }
    }
    this.totalWeight = this.calculateTotalWeight();
  }

  calculateTotalWeight() {
    let calculatedWeight = 0;
    for (let x = 0; x < this.weightDataDictionary.length; x++) {
      calculatedWeight = calculatedWeight + this.weightDataDictionary[x].GoalWeight;
    }
    return calculatedWeight;
  }

}
