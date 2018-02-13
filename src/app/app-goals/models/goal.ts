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
  Actions: Action[];
  Notes: string;

  constructor(goalTypeId: number, teamMemberId: number) {
    this.GoalId = 0;
    this.GoalType = goalTypeId;
    this.TeamMemberId = teamMemberId;
    this.CompetencyId = null;
    this.CompetencyType = null;
    this.WIGId = null;
    this.IndustryTeamId = null;
    this.ServiceLineId = null;
    this.GoalName = '';
    this.GoalDescription = '';
    this.Weight = 5;
    this.Notes = '';
    this.Actions = [new Action(this.GoalId)];
  }
}
