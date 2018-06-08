import { Component, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { Dropdowns } from '../../models/dropdowns';
import { GoalData } from '../../models/goal';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IndustryTeam } from '../../../core/model/team-member';
import { TeamMemberService } from '../../../core/services/team-member.service';

@Component({
  selector: 'app-read-only-goal-form',
  templateUrl: './read-only-goal-form.component.html',
  styleUrls: ['./read-only-goal-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReadOnlyGoalFormComponent implements OnChanges {
  @Input() dropDownData: Dropdowns;
  @Input() goal: GoalData;

  weightValues: number[] = [5, 10, 15, 20, 25, 30, 35, 40];
  goalForm: FormGroup;

  serviceLine = [{ id: 0, value: 'None' }, { id: 1, value: 'Assurance' }];

  industryTeams: IndustryTeam[];

  constructor(private fb: FormBuilder, private teamMemberService: TeamMemberService) { }

  ngOnChanges() {
    this.goalForm = this.toFormGroup(this.goal);
    this.teamMemberService.teamMember$.subscribe(data => this.industryTeams = data.IndustryTeams);
  }

  private toFormGroup(data: GoalData): FormGroup {
    const formGroup = this.fb.group({
      GoalId: data.GoalId,
      GoalTypeId: data.GoalTypeId,
      TeamMemberId: data.TeamMemberId,
      GoalCompetencyId: {value: data.GoalCompetencyId, disabled: true},
      GoalCompetencyTypeId: {value: data.GoalCompetencyTypeId, disabled: true},
      GoalWIGId: {value: data.GoalWIGId, disabled: true},
      IndustryTeamId: {value: data.IndustryTeamId, disabled: true},
      ServiceLineId: {value: data.ServiceLineId, disabled: true},
      Name: [{value: data.Name, disabled: true}],
      GoalDescription: [{value: data.GoalDescription, disabled: true}],
      Weight: {value: data.Weight, disabled: true},
      GoalYear: data.GoalYear,
      DisplayDateCompleted: data.DisplayDateCompleted,
    });

    return formGroup;
  }
}
