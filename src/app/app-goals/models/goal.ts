import { Action } from './action';

export class Goal {
  GoalID: number;
  GoalTypeID: number;
  TeamMemberID: number;
  CompetencyID: number;
  CompetencyTypeID: number;
  WIGID: number;
  IndustryTeamID: number;
  ServiceLineID: number;
  GoalName: string;
  GoalDescription: string;
  Weight: number;
  Actions: Action[];
  Notes: string;

  constructor(goalTypeId: number, teamMemberId: number) {
    this.GoalID = 0;
    this.GoalTypeID = goalTypeId;
    this.TeamMemberID = teamMemberId;
    this.CompetencyID = null;
    this.CompetencyTypeID = null;
    this.WIGID = null;
    this.IndustryTeamID = null;
    this.ServiceLineID = null;
    this.GoalName = '';
    this.GoalDescription = '';
    this.Weight = 5;
    this.Notes = '';
    this.Actions = [new Action(this.GoalID)];
  }
}
