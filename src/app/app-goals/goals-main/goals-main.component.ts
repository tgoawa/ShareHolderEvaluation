import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Goals } from './model/goals';
import { GoalTypeWeightData } from './model/weight';
import { GoalsService } from '../shared/services/goals.service';
import { DashboardModel } from './model/dashboard.model';
import { Observable } from 'rxjs/Observable';
import { YearSelectionService } from '../../core/services/year-selection.service';
import { TeamMember } from '../../core/model/team-member';
import { TeamMemberService } from '../../core/services/team-member.service';
import { ReadOnlyService } from '../../core/services/read-only.service';

@Component({
  selector: 'app-goals-main',
  templateUrl: './goals-main.component.html',
  styleUrls: ['./goals-main.component.css']
})
export class GoalsMainComponent implements OnInit {
  totalWeight: number;
  dashboardModels: DashboardModel[];
  weightDataDictionary: GoalTypeWeightData[];
  teamMember: TeamMember;
  year: number;
  isReadOnly: boolean;

  constructor(private goalService: GoalsService,
    private yearService: YearSelectionService,
    private teamMemberService: TeamMemberService,
    private readOnlyService: ReadOnlyService,
    private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.totalWeight = 0;
    this.getData();
    this.readOnlyService.readOnly$.subscribe(data =>{
      this.isReadOnly = data;
    });
  }

  getGoals(teamMemberId: number, year: number) {
    this.goalService.getDashboardGoals(teamMemberId, year)
    .subscribe(data => {
      this.dashboardModels = data;
      this.checkForReadOnly(this.dashboardModels);
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
    this.cd.detectChanges();
  }

  calculateTotalWeight() {
    let calculatedWeight = 0;
    for (let x = 0; x < this.weightDataDictionary.length; x++) {
      calculatedWeight = calculatedWeight + this.weightDataDictionary[x].GoalWeight;
    }
    return calculatedWeight;
  }

  private getData() {
    this.teamMemberService.teamMember$
      .subscribe(teamMemberObject => {
        this.teamMember = teamMemberObject;
        this.yearService.selectedGoalYear$.subscribe(data => {
          this.year = data;
          this.getGoals(this.teamMember.TeamMemberId, this.year);
        });
      }, error => {
        console.error('Could not retrieve team member object!');
      });
  }

  private checkForReadOnly(dashboardModels: DashboardModel[]) {
    for (let x = 0; x < dashboardModels.length; x++) {
      if (!dashboardModels[x].IsReadOnly) {
        this.setReadOnly(false);
        break;
      }
    }
  }

  private setReadOnly(val: boolean) {
    this.readOnlyService.setReadOnly(val);
  }

}
