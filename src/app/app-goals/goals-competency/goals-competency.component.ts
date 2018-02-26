import { Component, OnInit } from '@angular/core';
import { GoalData } from '../models/goal';
import { ActivatedRoute } from '@angular/router';
import { GoalsService } from '../shared/services/goals.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-goals-competency',
  templateUrl: './goals-competency.component.html',
  styleUrls: ['./goals-competency.component.css'],
})
export class GoalsCompetencyComponent implements OnInit {
  goals: GoalData[];
  goal: GoalData;
  totalWeight: number;
  constructor(
    private route: ActivatedRoute,
    private goalsService: GoalsService
  ) {}

  ngOnInit() {
    this.getGoals(1936);
    this.setGoal(7, 1936);
  }

  private setGoal(goalTypeId: number, teamMemberId: number) {
    this.route.params.subscribe(params => {
      if (params['id'] === '0') {
        this.goal = new GoalData(goalTypeId, teamMemberId);
      } else {
        // this.getGoal(params['id']);
      }
    });
  }

  setExistingGoal(goal: GoalData) {
    this.goal = undefined;
    this.goal = _.cloneDeep(goal);
  }

  private getGoals(id: number) {
    this.goalsService.getCompetencyGoals(id).subscribe(
      data => {
        this.goals = data;
        this.totalWeight = this.calculateTotalWeight(this.goals);
      },
      error => {
        console.log('Could not retrieve list of goals');
      }
    );
  }

  calculateTotalWeight(goals: GoalData[]): number {
    let calculatedWeight = 0;
    for (let x = 0; x < goals.length; x++) {
      calculatedWeight = calculatedWeight + goals[x].Weight;
    }
    return calculatedWeight;
  }
}
