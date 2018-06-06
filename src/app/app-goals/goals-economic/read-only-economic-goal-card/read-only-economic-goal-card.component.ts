import { Component, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { EconomicGoalModel, EconomicGoal } from '../../models/economic-goal';

import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GoalsService } from '../../shared/services/goals.service';
import { MatSnackBar } from '@angular/material';
const numberMask = createNumberMask({
  prefix: '$',
});
@Component({
  selector: 'app-read-only-economic-goal-card',
  templateUrl: './read-only-economic-goal-card.component.html',
  styleUrls: ['./read-only-economic-goal-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReadOnlyEconomicGoalCardComponent implements OnChanges {
  @Input() economicGoal: EconomicGoalModel;
  @Input() year: number;
  @Input() previousYear: number;
  currentYearHeading = ' Goals';
  previousYearActualHeading = 'Actuals ending June 30, ';
  previousYearGoalheading = ' Goals';
  mask = numberMask;
  private isDirty = false;

  weightValues: number[] = [5, 10, 15, 20, 25, 30, 35, 40];
  economicGoalForm: FormGroup;
  constructor(
    private fb: FormBuilder,
    private goalService: GoalsService,
    private snackBar: MatSnackBar
  ) { }

  ngOnChanges() {
    this.economicGoalForm = this.toFormGroup(this.economicGoal.CurrentEconomicGoal);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onSubmit(formValue) {
    let formToSave = new EconomicGoal();
    formToSave = this.formatGoalFormValues(formValue);
    this.updateEconomicGoal(formToSave);
  }

  setDirtyFlag() {
    this.isDirty = true;
  }

  private formatGoalFormValues(goalFormValue) {
    const preparedValue = new EconomicGoal();
    preparedValue.EconomicGoalId = goalFormValue.EconomicGoalId;
    preparedValue.TeamMemberId = goalFormValue.TeamMemberId;
    preparedValue.Weight = goalFormValue.Weight;
    preparedValue.Year = goalFormValue.Year;
    preparedValue.CoachId = goalFormValue.CoachId;
    preparedValue.Detail.EconomicGoalId = goalFormValue.EconomicGoalId;
    preparedValue.Detail.EconomicDetailId = goalFormValue.EconomicDetailId;
    preparedValue.Detail.EconomicGoalTypeId = goalFormValue.EconomicGoalTypeId;
    preparedValue.Detail.BillingsTiers1_3 = this.removeMoneyMask(goalFormValue.BillingsTiers1_3);
    preparedValue.Detail.BillingsTiers4_5 = this.removeMoneyMask(goalFormValue.BillingsTiers4_5);
    preparedValue.Detail.BillingsTier6 = this.removeMoneyMask(goalFormValue.BillingsTier6);
    preparedValue.Detail.BusinessNewClients = this.removeMoneyMask(goalFormValue.BusinessNewClients);
    preparedValue.Detail.BusinessExistingClients = this.removeMoneyMask(goalFormValue.BusinessExistingClients);
    preparedValue.Detail.ReferralsSpecialityUnits = this.removeMoneyMask(goalFormValue.ReferralsSpecialityUnits);
    preparedValue.Detail.ChargeHours = this.removeMoneyMask(goalFormValue.ChargeHours);
    preparedValue.Detail.Realization = this.removeMoneyMask(goalFormValue.Realization);
    preparedValue.Detail.DaysinWIP_AR = this.removeMoneyMask(goalFormValue.DaysinWIP_AR);
    preparedValue.Detail.IsDirty = this.isDirty;

    return preparedValue;
  }

  private removeMoneyMask(obj) {
    if (isNaN(obj)) {
      const res = obj.replace(/,/g, '').replace('$', '');
      const asNumber = parseInt(res, 10);
      return asNumber;
    } else {
      return obj;
    }
  }

  private toFormGroup(data: EconomicGoal): FormGroup {
    const formGroup = this.fb.group({
      EconomicGoalId: data.EconomicGoalId,
      TeamMemberId: data.TeamMemberId,
      Weight: {value: data.Weight, disabled: true},
      Year: data.Year,
      CoachId: data.CoachId,
      EconomicDetailId: data.Detail.EconomicDetailId,
      EconomicGoalTypeId: data.Detail.EconomicGoalTypeId,
      BillingsTiers1_3: [{value: data.Detail.BillingsTiers1_3, disabled: true}, Validators.required],
      BillingsTiers4_5: [{value: data.Detail.BillingsTiers4_5, disabled: true}, Validators.required],
      BillingsTier6: [{value: data.Detail.BillingsTier6, disabled: true}, Validators.required],
      BusinessNewClients: [{value: data.Detail.BusinessNewClients, disabled: true}, Validators.required],
      BusinessExistingClients: [{value: data.Detail.BusinessExistingClients, disabled: true}, Validators.required],
      ReferralsSpecialityUnits: [{value: data.Detail.ReferralsSpecialityUnits, disabled: true}, Validators.required],
      ChargeHours: [{value: data.Detail.ChargeHours, disabled: true}, Validators.required],
      Realization: [{value: data.Detail.Realization, disabled: true}, Validators.required],
      DaysinWIP_AR: [{value: data.Detail.DaysinWIP_AR, disabled: true}, Validators.required],
    });

    return formGroup;
  }

  private updateEconomicGoal(economicGoal: EconomicGoal) {
    this.goalService.updateEconomicGoal(economicGoal).subscribe(
      data => {
        if (data === null || data === undefined) {
          console.error('Goal did not update properly');
        } else {
          this.openSnackBar('Economic goal updated successfully!', '');
          console.log(data);
        }
      },
      error => {
        console.log(error);
      }
    );
  }
}
