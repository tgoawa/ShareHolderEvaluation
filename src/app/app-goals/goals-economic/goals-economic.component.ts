import { Component, OnInit } from '@angular/core';
import { EconomicGoal, EconomicGoalModel } from '../models/economic-goal';

import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GoalsService } from '../shared/services/goals.service';

const numberMask = createNumberMask({
  prefix: '$'
});

@Component({
  selector: 'app-goals-economic',
  templateUrl: './goals-economic.component.html',
  styleUrls: ['./goals-economic.component.css']
})
export class GoalsEconomicComponent implements OnInit {
  currentYearHeading = ' Goals';
  economicGoal: EconomicGoalModel;
  previousYearActualHeading = 'Actuals ending June 30, ';
  previousYearGoalheading = ' Goals';
  mask = numberMask;
  teamMemberId = 1936;
  year = 2018;
  previousYear = this.year - 1;
  weightValues: number[] = [5, 10, 15, 20, 25, 30, 35, 40];
  economicGoalForm: FormGroup;

  constructor(private fb: FormBuilder, private goalService: GoalsService) { }

  ngOnInit() {
    this.currentYearHeading = this.year.toString() + this.currentYearHeading;
    this.previousYearActualHeading = this.previousYearActualHeading + this.previousYear.toString();
    this.previousYearGoalheading = this.previousYear.toString() + this.previousYearGoalheading;
    this.getEconomicGoal();
  }

  private getEconomicGoal() {
    this.goalService.getEconomicGoals(this.teamMemberId, this.year)
    .subscribe(data => {
      this.economicGoal = data;
      this.economicGoalForm = this.toFormGroup(this.economicGoal.CurrentEconomicGoal);
    }, error => {
      console.log(error);
    });
  }

  private toFormGroup(data: EconomicGoal): FormGroup {
    const formGroup = this.fb.group({
      EconomicGoalId: data.EconomicGoalId,
      TeamMemberId: data.TeamMemberId,
      Weight: data.Weight,
      Year: data.Year,
      BillingsTiers1_3: data.Detail.BillingsTiers1_3,
      BillingsTiers4_5: data.Detail.BillingsTiers4_5,
      BillingsTier6: data.Detail.BillingsTier6,
      BusinessNewClients: data.Detail.BusinessNewClients,
      BusinessExistingClients: data.Detail.BusinessExistingClients,
      ReferralsSpecialityUnits: data.Detail.ReferralsSpecialityUnits,
      ChargeHours: data.Detail.ChargeHours,
      Realization: data.Detail.Realization,
      DaysinWIP_AR: data.Detail.DaysinWIP_AR
    });

    return formGroup;
  }

}
