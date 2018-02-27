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
  totalWeight: number;
  goalWeightData: GoalWeightModel[] = [];
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

  createWeightDataDictionary(goalData: GoalData[]): GoalWeightModel[] {
    const dataDictionary: GoalWeightModel[] = [];
    for (let x = 0; x < goalData.length; x++) {
      const goalWeightModel = new GoalWeightModel(goalData[x].GoalId, goalData[x].Weight);
      dataDictionary.push(goalWeightModel);
    }
    return dataDictionary;
  }

  private getGoals(id: number) {
    this.goalsService.getWIGGoals(id).subscribe(
      data => {
        this.goals = data;
        this.goalWeightData = this.createWeightDataDictionary(this.goals);
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
