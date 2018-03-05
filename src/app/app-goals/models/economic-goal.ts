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
  Details: Detail[];
}

export interface Detail {
  BillingsTiers1_3: number;
  BillingsTiers4_5: number;
  BillingsTier6: number;
  BusinessExistingClients: number;
  BusinessNewClients: number;
  ReferralsSpecialityUnits: number;
  ChargeHours: number;
  Realization: number;
  DaysinWIP_AR: number;
}
