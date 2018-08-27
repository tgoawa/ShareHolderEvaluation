import { Component, OnInit } from '@angular/core';
import { EconomicGoalModel } from '../models/economic-goal';

import { GoalsService } from '../shared/services/goals.service';
import { YearSelectionService } from '../../core/services/year-selection.service';
import { TeamMember } from '../../core/model/team-member';
import { TeamMemberService } from '../../core/services/team-member.service';
import { ReadOnlyService } from '../../core/services/read-only.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-goals-economic',
  templateUrl: './goals-economic.component.html',
  styleUrls: ['./goals-economic.component.css'],
})
export class GoalsEconomicComponent implements OnInit {
  economicGoal: EconomicGoalModel;
  isReadOnly: boolean;
  teamMember: TeamMember;
  year: number;
  previousYear: number;

  constructor(
    private goalService: GoalsService,
    private yearService: YearSelectionService,
    private teamMemberService: TeamMemberService,
    private readOnlyService: ReadOnlyService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getData();
    this.readOnlyService.readOnly$.subscribe(data => {
      this.isReadOnly = data;
    });
  }

  private getData() {
    this.teamMemberService.teamMember$
      .subscribe(teamMemberObject => {
        this.teamMember = teamMemberObject;
        if (this.teamMember === null || this.teamMember.TeamMemberId === null || this.teamMember.TeamMemberId === 0) {
          this.router.navigate(['/login']);
        } else {
        this.yearService.selectedGoalYear$.subscribe(data => {
          this.year = data;
          this.getEconomicGoal(this.teamMember.TeamMemberId, this.year);
          this.previousYear = this.year - 1;
        });
      }}, error => {
        console.error('Could not retrieve team member object!');
      });
  }

  private getEconomicGoal(teamMemberId: number, year: number) {
    this.goalService.getEconomicGoals(teamMemberId, year).subscribe(
      data => {
        this.economicGoal = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
