import { Component, OnInit } from '@angular/core';
import { GoalData } from '../../models/goal';
import { GoalWeightModel } from '../../goals-main/model/weight';
import { ActivatedRoute } from '@angular/router';
import { GoalsService } from '../services/goals.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

import * as _ from 'lodash';
import { DropdownsService } from '../services/dropdowns.service';
import { Dropdowns } from '../../models/dropdowns';
import { YearSelectionService } from '../../../core/services/year-selection.service';

@Component({
  selector: 'app-goal-base',
  templateUrl: './goal-base.component.html',
  styleUrls: ['./goal-base.component.css'],
})
export class GoalBaseComponent implements OnInit {
  confirmationDialogRef: MatDialogRef<ConfirmationDialogComponent>;
  dropdownLists = new Dropdowns();
  goals: GoalData[];
  goal: GoalData;
  goalTypeId: number;
  isFormDirty: boolean;
  year: number;
  teamMemberId: number;
  totalWeight: number;
  goalWeightData: GoalWeightModel[];
  constructor(
    private route: ActivatedRoute,
    private goalsService: GoalsService,
    private dropService: DropdownsService,
    private dialog: MatDialog,
    private yearService: YearSelectionService
  ) {}

  ngOnInit() {
    this.teamMemberId = 1936;
    this.yearService.selectedGoalYear$.subscribe(data => {
      this.year = data;
      this.getGoals(this.teamMemberId, this.goalTypeId, this.year);
    });
    this.getDropdownLists(this.year);
  }

  onSetExistingGoal(goal: GoalData) {
    this.goal = undefined;
    this.goal = _.cloneDeep(goal);
  }

  onAddGoal() {
    if (this.isFormDirty) {
      this.openConfirmationDialog();
    } else {
      this.goal = new GoalData(this.goalTypeId, this.teamMemberId, this.year);
    }
  }

  onSaveGoal(savedGoal: GoalData) {
    console.log('Goal Saved!');
    this.getGoals(this.teamMemberId, this.goalTypeId, this.year);
  }

  onUpdateGoal(updatedGoal: GoalData) {
    console.log('Goal Updated!');
    this.getGoals(this.teamMemberId, this.goalTypeId, this.year);
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

  setFormIsDirty(value: boolean) {
    this.isFormDirty = value;
  }

  private createGoalWeightData(goalData: GoalData[]): GoalWeightModel[] {
    const dataDictionary: GoalWeightModel[] = [];
    for (let x = 0; x < goalData.length; x++) {
      const goalWeightModel = new GoalWeightModel(
        goalData[x].GoalId,
        goalData[x].Weight
      );
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

  private getDropdownLists(year: Number) {
    this.getCompetencies();
    this.getCompetencyTypes();
    this.getServiceLines();
    this.getWigs(year);
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

  private getServiceLines() {
    this.dropService.getServiceLines().subscribe(
      data => {
        this.dropdownLists.ServiceLines = data;
      },
      error => {
        console.log('Could not bind service dropdowns to view');
      }
    );
  }

  private getWigs(year: Number) {
    this.dropService.getWIGs(year).subscribe(
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

  private openConfirmationDialog() {
    this.confirmationDialogRef = this.dialog.open(ConfirmationDialogComponent);

    this.confirmationDialogRef.afterClosed().subscribe(ignoreChanges => {
      if (ignoreChanges) {
        this.goal = new GoalData(this.goalTypeId, this.teamMemberId, this.year);
        this.isFormDirty = false;
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
