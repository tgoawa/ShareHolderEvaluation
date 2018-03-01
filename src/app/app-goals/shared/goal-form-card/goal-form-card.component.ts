import { Component, OnInit, Input, OnChanges, DoCheck, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { GoalData } from '../../models/goal';
import { Dropdowns } from '../../models/dropdowns';
import { GoalsService } from '../services/goals.service';

export interface IndustryTeam {
  id: number;
  value: string;
}

@Component({
  selector: 'app-goal-form-card',
  templateUrl: './goal-form-card.component.html',
  styleUrls: ['./goal-form-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GoalFormCardComponent implements DoCheck, OnInit, OnChanges {
  @Input() dropDownData: Dropdowns;
  @Input() goal: GoalData;
  @Output() isFormDirty: EventEmitter<boolean> = new EventEmitter<boolean>();
  weightValues: number[] = [5, 10, 15, 20, 25, 30, 35, 40];
  goalForm: FormGroup;
  serviceLine = [{ id: 0, value: 'None' }, { id: 1, value: 'Assurance' }];

  industryTeams: IndustryTeam[] = [
    { id: 0, value: 'None' },
    { id: 1, value: 'Government' },
    { id: 2, value: 'Construction' },
  ];

  constructor(private fb: FormBuilder, private goalsService: GoalsService) {}

  ngOnInit() {}

  ngOnChanges() {
    this.goalForm = this.toFormGroup(this.goal);
  }

  ngDoCheck() {
    if (!this.goalForm.pristine) {
      console.log('Goal form is dirty!');
      this.isFormDirty.emit(true);
    }
  }

  private toFormGroup(data: GoalData): FormGroup {
    const formGroup = this.fb.group({
      GoalId: data.GoalId,
      GoalTypeId: data.GoalTypeId,
      TeamMemberId: data.TeamMemberId,
      GoalCompetencyId: data.GoalCompetencyId,
      GoalCompetencyTypeId: data.GoalCompetencyTypeId,
      GoalWIGId: data.GoalWIGId,
      IndustryTeamId: data.IndustryTeamId,
      ServiceLineId: data.ServiceLineId,
      Name: data.Name,
      GoalDescription: data.GoalDescription,
      Weight: data.Weight,
      GoalYear: data.GoalYear,
      DisplayDateCompleted: data.DisplayDateCompleted,
    });

    return formGroup;
  }

  onSubmit(formValue: GoalData) {
    if (formValue.GoalId !== 0) {
      this.updateGoal(formValue);
    } else {
      this.saveGoal(formValue);
    }
    console.log(formValue);
  }

  private saveGoal(formValue: GoalData) {
    this.goalsService.saveGoal(formValue).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }

  private updateGoal(formValue: GoalData) {
    this.goalsService.updateGoal(formValue).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
