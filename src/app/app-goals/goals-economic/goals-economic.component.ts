import { Component, OnInit } from '@angular/core';
import { EconomicGoal } from '../models/economic-goal';

import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { FormGroup, FormBuilder } from '@angular/forms';

const numberMask = createNumberMask({
  prefix: '$'
});

@Component({
  selector: 'app-goals-economic',
  templateUrl: './goals-economic.component.html',
  styleUrls: ['./goals-economic.component.css']
})
export class GoalsEconomicComponent implements OnInit {
  mask = numberMask;
  weightValues: number[] = [5, 10, 15, 20, 25, 30, 35, 40];
  economicGoal: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.economicGoal = this.toFormGroup(new EconomicGoal());
  }

  private toFormGroup(data: EconomicGoal): FormGroup {
    const formGroup = this.fb.group({
      EconomicGoalId: data.EconomicGoalId,
      TeamMemberId: data.TeamMemberId,
      Weight: data.Weight,
      Year: data.Year,
      BillingsTiers1_3: data.BillingsTiers1_3,
      BillingsTiers4_5: data.BillingsTiers4_5,
      BillingsTier6: data.BillingsTier6,
      BusinessExistingClients: data.BusinessExistingClients,
      BusinessNewClients: data.BusinessNewClients,
      ReferralsSpecialityUnits: data.ReferralsSpecialityUnits,
      ChargeHours: data.ChargeHours,
      Realization: data.Realization,
      DaysinWIP_AR: data.DaysinWIP_AR
    });

    return formGroup;
  }

}
