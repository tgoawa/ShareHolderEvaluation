import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { GoalData } from '../../models/goal';

export interface IndustryTeam {
  id: number;
  value: string;
}

@Component({
  selector: 'app-goal-form-card',
  templateUrl: './goal-form-card.component.html',
  styleUrls: ['./goal-form-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalFormCardComponent implements OnInit, OnChanges {
  @Input() goal: GoalData;
  weightValues: number[] = [5, 10, 15, 20, 25, 30, 35, 40];
  goalForm: FormGroup;
  serviceLine = [
    {id: 0, value: 'None'},
    {id: 1, value: 'Assurance'},
  ];

  industryTeams: IndustryTeam[] = [
    {id: 0, value: 'None'},
    {id: 1, value: 'Government'},
    {id: 2, value: 'Construction'}
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.goalForm = this.toFormGroup(this.goal);
  }

  private toFormGroup(data: GoalData): FormGroup {
    const formGroup = this.fb.group({
      GoalId: data.GoalId,
      GoalTypeId: data.GoalTypeId,
      TeamMemberId: data.TeamMemberId,
      CompetencyId: data.GoalCompetencyId,
      CompetencyType: data.GoalCompetencyTypeId,
      WIGId: data.GoalWIGId,
      IndustryTeamId: data.IndustryTeamId,
      ServiceLineId: data.ServiceLineId,
      Name: data.Name,
      GoalDescription: data.GoalDescription,
      Weight: data.Weight
    });

    return formGroup;
  }

  onSubmit(formValue: GoalData) {
    console.log(formValue);
  }
}
