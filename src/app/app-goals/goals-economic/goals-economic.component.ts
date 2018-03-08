import { Component, OnInit } from '@angular/core';
import { EconomicGoal, EconomicGoalModel } from '../models/economic-goal';

import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GoalsService } from '../shared/services/goals.service';
import { YearSelectionService } from '../../core/services/year-selection.service';
import { MatSnackBar } from '@angular/material';

const numberMask = createNumberMask({
  prefix: '$',
});

@Component({
  selector: 'app-goals-economic',
  templateUrl: './goals-economic.component.html',
  styleUrls: ['./goals-economic.component.css'],
})
export class GoalsEconomicComponent implements OnInit {
  currentYearHeading = ' Goals';
  economicGoal: EconomicGoalModel;
  previousYearActualHeading = 'Actuals ending June 30, ';
  previousYearGoalheading = ' Goals';
  mask = numberMask;
  teamMemberId = 1936;
  year: number;
  previousYear: number;
  weightValues: number[] = [5, 10, 15, 20, 25, 30, 35, 40];
  economicGoalForm: FormGroup;

  private isDirty = false;

  constructor(
    private fb: FormBuilder,
    private goalService: GoalsService,
    private yearService: YearSelectionService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.yearService.selectedYear$.subscribe(data => (this.year = data));
    this.previousYear = this.year - 1;
    this.currentYearHeading = this.year.toString() + this.currentYearHeading;
    this.getEconomicGoal();
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

  private getEconomicGoal() {
    this.goalService.getEconomicGoals(this.teamMemberId, this.year).subscribe(
      data => {
        this.economicGoal = data;
        this.economicGoalForm = this.toFormGroup(
          this.economicGoal.CurrentEconomicGoal
        );
      },
      error => {
        console.log(error);
      }
    );
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
      Weight: data.Weight,
      Year: data.Year,
      CoachId: data.CoachId,
      EconomicDetailId: data.Detail.EconomicDetailId,
      EconomicGoalTypeId: data.Detail.EconomicGoalTypeId,
      BillingsTiers1_3: [data.Detail.BillingsTiers1_3, Validators.required],
      BillingsTiers4_5: [data.Detail.BillingsTiers4_5, Validators.required],
      BillingsTier6: [data.Detail.BillingsTier6, Validators.required],
      BusinessNewClients: [data.Detail.BusinessNewClients, Validators.required],
      BusinessExistingClients: [data.Detail.BusinessExistingClients, Validators.required],
      ReferralsSpecialityUnits: [data.Detail.ReferralsSpecialityUnits, Validators.required],
      ChargeHours: [data.Detail.ChargeHours, Validators.required],
      Realization: [data.Detail.Realization, Validators.required],
      DaysinWIP_AR: [data.Detail.DaysinWIP_AR, Validators.required],
    });

    return formGroup;
  }

  private updateEconomicGoal(economicGoal: EconomicGoal) {
    this.goalService.updateEconomicGoal(economicGoal).subscribe(
      data => {
        this.openSnackBar('Economic goal updated successfully!', '');
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
}
