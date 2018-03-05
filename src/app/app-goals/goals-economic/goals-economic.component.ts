import { Component, OnInit } from '@angular/core';
import { EconomicGoal } from '../models/economic-goal';

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
  currentYearHeading: string;
  previousYearActualHeading = 'Actuals ending June 30, ';
  previousYearGoalheading = ' Goals';
  mask = numberMask;
  teamMemberId = 1936;
  year = 2018;
  previousYear = this.year - 1;
  weightValues: number[] = [5, 10, 15, 20, 25, 30, 35, 40];
  economicGoal: FormGroup;

  constructor(private fb: FormBuilder, private goalService: GoalsService) { }

  ngOnInit() {
    this.currentYearHeading = this.year.toString();
    this.previousYearActualHeading = this.previousYearActualHeading + this.previousYear.toString();
    this.previousYearGoalheading = this.previousYear.toString() + this.previousYearGoalheading;
    this.economicGoal = this.toFormGroup(new EconomicGoal());
    this.getEconomicGoal();
  }

  private getEconomicGoal() {
    this.goalService.getEconomicGoals(this.teamMemberId, this.year)
    .subscribe(data => {
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
      BillingsTiers1_3: 0,
      BillingsTiers4_5: 0,
      BillingsTier6: 0,
      BusinessNewClients: 0,
      BusinessExistingClients: 0,
      ReferralsSpecialityUnits: 0,
      ChargeHours: 0,
      Realization: 0,
      DaysinWIP_AR: 0
    });

    return formGroup;
  }

  private mapEconomicGoalData(data: EconomicGoal[]) {

  }

}
