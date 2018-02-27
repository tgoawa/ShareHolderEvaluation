import { Component, OnInit } from '@angular/core';
import { GoalData } from '../models/goal';
import { ActivatedRoute } from '@angular/router';
import { GoalsService } from '../shared/services/goals.service';

import * as _ from 'lodash';
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
  year = 2017;
  totalWeight: number;
  goalWeightData: GoalWeightModel[];
  constructor(
    private route: ActivatedRoute,
    private goalsService: GoalsService
  ) {}

  ngOnInit() {
    this.getGoals(1936, this.goalTypeId, this.year);
  }

  onSetExistingGoal(goal: GoalData) {
    this.goal = undefined;
    this.goal = _.cloneDeep(goal);
  }

  createGoalWeightData(goalData: GoalData[]): GoalWeightModel[] {
    const dataDictionary: GoalWeightModel[] = [];
    for (let x = 0; x < goalData.length; x++) {
      const goalWeightModel = new GoalWeightModel(goalData[x].GoalId, goalData[x].Weight);
      dataDictionary.push(goalWeightModel);
    }
    return dataDictionary;
  }

  onWeightChange(goalWeightModel: GoalWeightModel) {
    const updatedDataDictionary: GoalWeightModel[] = [];
    for (let x = 0; x < this.goalWeightData.length; x ++) {
      if (goalWeightModel.GoalId === this.goalWeightData[x].GoalId) {
        updatedDataDictionary.push(goalWeightModel);
      } else {
        updatedDataDictionary.push(this.goalWeightData[x]);
      }
    }
    this.goalWeightData = updatedDataDictionary;
  }

  private getGoals(id: number, goalTypeId: number, year: number) {
    this.goalsService.getGoals(id, goalTypeId, year).subscribe(
      data => {
        this.goals = data;
        this.goalWeightData = this.createGoalWeightData(this.goals);
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
