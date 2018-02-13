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

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.goalForm = this.toFormGroup(this.goal);
  }

  private toFormGroup(data: Goal): FormGroup {
    const formGroup = this.fb.group({
      GoalId: data.GoalId,
      GoalTypeId: data.GoalType,
      TeamMemberId: data.TeamMemberId,
      CompetencyId: data.CompetencyId,
      CompetencyType: data.CompetencyType,
      WIGId: data.WIGId,
      IndustryTeamId: data.IndustryTeamId,
      ServiceLineId: data.ServiceLineId,
      GoalName: data.GoalName,
      GoalDescription: data.GoalDescription,
      Weight: data.Weight,
      Notes: data.Notes
    });

    return formGroup;
  }

}
