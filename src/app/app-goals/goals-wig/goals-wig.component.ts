import { Component, OnInit } from '@angular/core';
import { Goal } from '../models/goal';
import { ActivatedRoute } from '@angular/router';
import { GoalsService } from '../shared/services/goals.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-goals-wig',
  templateUrl: './goals-wig.component.html',
  styleUrls: ['./goals-wig.component.css'],
})
export class GoalsWigComponent implements OnInit {
  goals: Goal[];
  goal: Goal;
  totalWeight: number;
  constructor(
    private route: ActivatedRoute,
    private goalsService: GoalsService
  ) {}

  ngOnInit() {
    this.getGoals(1936);
    this.setGoal(2, 1936);
  }

  private setGoal(goalTypeId: number, teamMemberId: number) {
    this.route.params.subscribe(params => {
      if (params['id'] === '0') {
        this.goal = new Goal(goalTypeId, teamMemberId);
      } else {
        // this.getGoal(params['id']);
      }
    });
  }

  setExistingGoal(goal: Goal) {
    this.goal = undefined;
    this.goal = _.cloneDeep(goal);
  }

  calculateTotalWeight(goals: Goal[]): number {
    let calculatedWeight = 0;
    for (let x = 0; x < goals.length; x++) {
      calculatedWeight = calculatedWeight + goals[x].Weight;
    }
    return calculatedWeight;
  }

  private getGoals(id: number) {
    this.goalsService.getWIGGoals(id).subscribe(
      data => {
        this.goals = data;
        this.totalWeight = this.calculateTotalWeight(this.goals);
      },
      error => {
        console.log('Could not retrieve list of goals');
      }
    );
  }
}
