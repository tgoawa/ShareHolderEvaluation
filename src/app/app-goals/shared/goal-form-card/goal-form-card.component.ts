import { Component, OnInit, Input, OnChanges, DoCheck, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { GoalData } from '../../models/goal';
import { Dropdowns } from '../../models/dropdowns';
import { GoalsService } from '../services/goals.service';
import { MatSnackBar } from '@angular/material';
import { TeamMemberService } from '../../../core/services/team-member.service';
import { IndustryTeam } from '../../../core/model/team-member';

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
  @Output() savedGoal: EventEmitter<GoalData> = new EventEmitter<GoalData>();
  @Output() updatedGoal: EventEmitter<GoalData> = new EventEmitter<GoalData>();

  weightValues: number[] = [5, 10, 15, 20, 25, 30, 35, 40];
  goalForm: FormGroup;
  serviceLine = [{ id: 0, value: 'None' }, { id: 1, value: 'Assurance' }];

  industryTeams: IndustryTeam[];

  constructor(public snackBar: MatSnackBar,
    private fb: FormBuilder,
    private goalsService: GoalsService,
    private teamMemberService: TeamMemberService) {}

  ngOnInit() {}

  ngOnChanges() {
    this.goalForm = this.toFormGroup(this.goal);
    this.teamMemberService.teamMember$.subscribe(data => this.industryTeams = data.IndustryTeams);
  }

  ngDoCheck() {
    if (!this.goalForm.pristine) {
      this.isFormDirty.emit(true);
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onSubmit(formValue: GoalData) {
    if (formValue.GoalId !== 0) {
      console.log(formValue);
      this.updateGoal(formValue);
    } else {
      this.saveGoal(formValue);
    }
  }

  private saveGoal(formValue: GoalData) {
    this.goalsService.saveGoal(formValue).subscribe(
      data => {
        console.log(data);
        this.savedGoal.emit(data);
        this.openSnackBar('Goal saved successfully!', '');
      },
      error => {
        console.log(error);
      }
    );
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
      Name: [data.Name, Validators.required],
      GoalDescription: [data.GoalDescription, Validators.required],
      Weight: data.Weight,
      GoalYear: data.GoalYear,
      DisplayDateCompleted: data.DisplayDateCompleted,
    });

    return formGroup;
  }

  private updateGoal(formValue: GoalData) {
    this.goalsService.updateGoal(formValue).subscribe(
      data => {
        console.log(data);
        this.updatedGoal.emit(data);
        this.openSnackBar('Goal updated successfully!', '');
      },
      error => {
        console.log(error);
      }
    );
  }
}
