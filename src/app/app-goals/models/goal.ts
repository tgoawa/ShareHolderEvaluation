import { Action } from './action';

export class Goal {
  GoalId: number;
  GoalType: number;
  TeamMemberId: number;
  CompetencyId: number;
  CompetencyType: number;
  WIGId: number;
  IndustryTeamId: number;
  ServiceLineId: number;
  GoalName: string;
  GoalDescription: string;
  Weight: number;
  Action: Action[];
  Notes: string;
}
