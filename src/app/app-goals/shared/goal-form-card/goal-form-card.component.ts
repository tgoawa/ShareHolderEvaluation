import { Component, OnInit, Input } from '@angular/core';
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
    {id: 1, value: 'Assurance'},
    {id: 2, value: 'Accounting'},
    {id: 3, value: 'Advisory'},
    {id: 4, value: 'Tax'},
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.goalForm = this.toFormGroup(this.goal);
  }

  private toFormGroup(data: Goal): FormGroup {
    const formGroup = this.fb.group({
      GoalId: data.GoalID,
      GoalTypeId: data.GoalTypeID,
      TeamMemberId: data.TeamMemberID,
      CompetencyId: data.CompetencyID,
      CompetencyType: data.CompetencyTypeID,
      WIGId: data.WIGID,
      IndustryTeamId: data.IndustryTeamID,
      ServiceLineId: data.ServiceLineID,
      GoalName: data.GoalName,
      GoalDescription: data.GoalDescription,
      Weight: data.Weight,
      Notes: data.Notes
    });

    return formGroup;
  }

}
