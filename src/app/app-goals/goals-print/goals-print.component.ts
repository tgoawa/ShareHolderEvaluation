import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../../core/model/team-member';
import { TeamMemberService } from '../../core/services/team-member.service';
import { YearSelectionService } from '../../core/services/year-selection.service';
import { DashboardModel } from '../goals-main/model/dashboard.model';
import { GoalsService } from '../shared/services/goals.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goals-print',
  templateUrl: './goals-print.component.html',
  styleUrls: ['./goals-print.component.css'],
})
export class GoalsPrintComponent implements OnInit {
  dashboardModel: DashboardModel;
  displayWIG = true;
  displayCompetency = true;
  displayLeadership = true;
  displayEconomic = true;
  year: number;
  teamMember: TeamMember;
  constructor(
    private teamMemberService: TeamMemberService,
    private yearService: YearSelectionService,
    private goalService: GoalsService,
    private router: Router
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
        if (
          this.teamMember === null ||
          this.teamMember.TeamMemberId === null ||
          this.teamMember.TeamMemberId === 0
        ) {
          this.router.navigate(['/login']);
        } else {
          this.yearService.selectedGoalYear$.subscribe(data => {
            this.year = data;
            this.getGoals(this.teamMember.TeamMemberId, this.year);
          });
        }
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
