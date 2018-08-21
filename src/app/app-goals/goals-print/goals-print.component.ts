import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../../core/model/team-member';
import { TeamMemberService } from '../../core/services/team-member.service';
import { YearSelectionService } from '../../core/services/year-selection.service';
import { DashboardModel } from '../goals-main/model/dashboard.model';
import { GoalsService } from '../shared/services/goals.service';

@Component({
  selector: 'app-goals-print',
  templateUrl: './goals-print.component.html',
  styleUrls: ['./goals-print.component.css'],
})
export class GoalsPrintComponent implements OnInit {
  dashboardModel: DashboardModel;
  displayWIG = false;
  displayCompetency = false;
  displayLeadership = false;
  displayEconomic = false;
  year: number;
  teamMember: TeamMember;
  constructor(
    private teamMemberService: TeamMemberService,
    private yearService: YearSelectionService,
    private goalService: GoalsService
  ) {}

  ngOnInit() {
    this.getData();
  }

  print() {
    window.print();
  }

  private getData() {
    this.teamMemberService.teamMember$.subscribe(
      teamMemberObject => {
        this.teamMember = teamMemberObject;
        this.yearService.selectedGoalYear$.subscribe(data => {
          this.year = data;
          this.getGoals(this.teamMember.TeamMemberId, this.year);
        });
      },
      error => {
        console.error('Could not retrieve team member object!');
      }
    );
  }

  private getGoals(teamMemberId: number, year: number) {
    this.goalService.getDashboardGoals(teamMemberId, year).subscribe(
      data => {
        this.dashboardModel = data;
      },
      error => {
        console.log('Could not bind goal data to view');
      }
    );
  }
}
