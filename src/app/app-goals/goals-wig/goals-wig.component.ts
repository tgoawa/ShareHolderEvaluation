import { Component, OnInit } from '@angular/core';
import { GoalData } from '../models/goal';
import { ActivatedRoute } from '@angular/router';
import { GoalsService } from '../shared/services/goals.service';

import * as _ from 'lodash';
import { Goal } from '../goals-main/model/goals';
import { GoalWeightModel } from '../goals-main/model/weight';

@Component({
  selector: 'app-goals-wig',
  templateUrl: './goals-wig.component.html',
  styleUrls: ['./goals-wig.component.css'],
})
export class GoalsWigComponent implements OnInit {
  goals: GoalData[];
  goal: GoalData;
  goalTypeId = 4;
  totalWeight: number;
  weightDataDictionary: Goal[];
  constructor(
    private route: ActivatedRoute,
    private goalsService: GoalsService
  ) {}

  ngOnInit() {
    this.getGoals(1936);
  }

  onSetExistingGoal(goal: GoalData) {
    this.goal = undefined;
    this.goal = _.cloneDeep(goal);
  }

  assignWeightTotal(goalWeightModel: GoalWeightModel) {
    for (let x = 0; x < this.weightDataDictionary.length; x++) {
      if (goalWeightModel.GoalId === this.weightDataDictionary[x].Id) {
        this.weightDataDictionary[x].Weight = goalWeightModel.GoalWeight;
      }
    }
    this.totalWeight = this.calculateTotalWeight(this.weightDataDictionary);
  }

  calculateTotalWeight(goals: Goal[]): number {
    let calculatedWeight = 0;
    for (let x = 0; x < goals.length; x++) {
      calculatedWeight = calculatedWeight + goals[x].Weight;
    }
    return calculatedWeight;
  }

  createWeightDataDictionary(goals: GoalData[]) {
    const dataDictionary = [];
    for (let x = 0; x < goals.length; x++) {
      const goalWeightData = new Goal();
      goalWeightData.Id = goals[x].GoalId;
      goalWeightData.Weight = goals[x].Weight;
      dataDictionary.push(goalWeightData);
    }
    return dataDictionary;
  }

  private getGoals(id: number) {
    this.goalsService.getWIGGoals(id).subscribe(
      data => {
        this.goals = data;
        this.weightDataDictionary = this.createWeightDataDictionary(this.goals);
        this.totalWeight = this.calculateTotalWeight(this.weightDataDictionary);
        this.setGoal(this.goals, id);
      },
      error => {
        console.log('Could not retrieve list of goals');
      }
    );
  }

  private setGoal(goals: GoalData[], teamMemberId: number) {
    this.route.params.subscribe(params => {
      if (params['id'] === '0') {
        this.goal = new GoalData(this.goalTypeId, teamMemberId);
      } else {
        this.setGoalFromRoute(goals, params['id']);
      }
    });
  }

  private setGoalFromRoute(goals: GoalData[], goalId: number) {
    for (let x = 0; x < goals.length; x++) {
      if (+goalId === goals[x].GoalId) {
        this.onSetExistingGoal(goals[x]);
        break;
      }
    }
  }
}
