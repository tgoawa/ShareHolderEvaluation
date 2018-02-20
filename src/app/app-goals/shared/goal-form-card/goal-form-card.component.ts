import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Goal } from '../../models/goal';

@Component({
  selector: 'app-goal-form-card',
  templateUrl: './goal-form-card.component.html',
  styleUrls: ['./goal-form-card.component.css']
})
export class GoalFormCardComponent implements OnInit {
  @Input() goal: Goal;
  weightValues: number[] = [5, 10, 15, 20, 25, 30, 35, 40];
  goalForm: FormGroup;
  serviceLine = [
    {id: 0, value: 'None'},
    {id: 1, value: 'Assurance'},
  ];

  industryTeams = [
    {id: 0, value: 'None'},
    {Id: 1, value: 'Government'},
    {id: 2, value: 'Construction'}
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.goalForm = this.toFormGroup(this.goal);
  }

  private toFormGroup(data: Goal): FormGroup {
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
      Weight: data.Weight,
      Notes: data.Notes
    });

    return formGroup;
  }

  onSubmit(formValue: Goal) {
    console.log(formValue);
  }
}
