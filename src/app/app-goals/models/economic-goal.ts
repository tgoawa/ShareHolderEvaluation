export interface EconomicGoalModel {
  CurrentEconomicGoal: EconomicGoal;
  PreviousEconomicGoal: EconomicGoal;
  PreviousYearActuals: EconomicGoal;
}

export class EconomicGoal {
  CoachId: number;
  EconomicGoalId: number;
  TeamMemberId: number;
  Weight: number;
  Year: number;
  Detail = new Detail();
}

export class Detail {
  EconomicGoalId: number;
  EconomicDetailId: number;
  EconomicGoalTypeId: number;
  BillingsTiers1_3: number;
  BillingsTiers4_5: number;
  BillingsTier6: number;
  BusinessExistingClients: number;
  BusinessNewClients: number;
  ReferralsSpecialityUnits: number;
  ChargeHours: number;
  Realization: number;
  DaysinWIP_AR: number;
  IsDirty: boolean;
}
