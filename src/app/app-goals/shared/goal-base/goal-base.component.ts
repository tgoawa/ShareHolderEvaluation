import { Component, OnInit } from '@angular/core';
import { GoalData } from '../../models/goal';
import { GoalWeightModel } from '../../goals-main/model/weight';
import { ActivatedRoute } from '@angular/router';
import { GoalsService } from '../services/goals.service';

import * as _ from 'lodash';
import { DropdownsService } from '../services/dropdowns.service';
import { Dropdowns } from '../../models/dropdowns';

@Component({
  selector: 'app-goal-base',
  templateUrl: './goal-base.component.html',
  styleUrls: ['./goal-base.component.css'],
})
export class GoalBaseComponent implements OnInit {
  dropdownLists = new Dropdowns();
  goals: GoalData[];
  goal: GoalData;
  goalTypeId: number;
  year: number;
  teamMemberId: number;
  totalWeight: number;
  goalWeightData: GoalWeightModel[];
  constructor(
    private route: ActivatedRoute,
    private goalsService: GoalsService,
    private dropService: DropdownsService
  ) {}

  ngOnInit() {
    this.teamMemberId = 1936;
    this.year = 2018;
    this.getDropdownLists();
    this.getGoals(this.teamMemberId, this.goalTypeId, this.year);
  }

  onSetExistingGoal(goal: GoalData) {
    this.goal = undefined;
    this.goal = _.cloneDeep(goal);
  }

  onAddGoal() {
    this.goal = new GoalData(this.goalTypeId, this.teamMemberId, this.year);
  }

  onWeightChange(goalWeightModel: GoalWeightModel) {
    const updatedDataDictionary: GoalWeightModel[] = [];
    for (let x = 0; x < this.goalWeightData.length; x++) {
      if (goalWeightModel.GoalId === this.goalWeightData[x].GoalId) {
        updatedDataDictionary.push(goalWeightModel);
      } else {
        updatedDataDictionary.push(this.goalWeightData[x]);
      }
    }
    this.goalWeightData = updatedDataDictionary;
  }

  private createGoalWeightData(goalData: GoalData[]): GoalWeightModel[] {
    const dataDictionary: GoalWeightModel[] = [];
    for (let x = 0; x < goalData.length; x++) {
      const goalWeightModel = new GoalWeightModel(goalData[x].GoalId, goalData[x].Weight);
      dataDictionary.push(goalWeightModel);
    }
    return dataDictionary;
  }

  private getCompetencies() {
    this.dropService.getCompetencies().subscribe(
      data => {
        this.dropdownLists.Competencies = data;
      },
      error => {
        console.log('Error binding data to view');
      }
    );
  }

  private getCompetencyTypes() {
    this.dropService.getCompetencyTypes().subscribe(
      data => {
        this.dropdownLists.CompetencyTypes = data;
      },
      error => {
        console.log('Error binding data to view');
      }
    );
  }

  private getDropdownLists() {
    this.getCompetencies();
    this.getCompetencyTypes();
    this.getWigs();
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

  private getWigs() {
    this.dropService.getWIGs().subscribe(
      data => {
        this.dropdownLists.WIG = data;
      },
      error => {
        console.log('Could not bind wig dropdown to view');
      }
    );
  }

  private setGoal(goals: GoalData[], teamMemberId: number) {
    this.route.params.subscribe(params => {
      if (params['id'] === '0') {
        this.goal = new GoalData(this.goalTypeId, teamMemberId, this.year);
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
