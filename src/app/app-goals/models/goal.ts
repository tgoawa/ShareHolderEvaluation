import { Action } from './action';
import { Note } from './note';

export class GoalData {
  GoalId: number;
  GoalTypeId: number;
  TeamMemberId: number;
  GoalCompetencyId: number;
  GoalCompetencyTypeId: number;
  GoalWIGId: number;
  IndustryTeamId: number;
  ServiceLineId: number;
  Name: string;
  GoalDescription: string;
  Weight: number;
  Actions: Action[];
  Notes: Note[];

  constructor(goalTypeId: number, teamMemberId: number) {
    this.GoalId = 0;
    this.GoalTypeId = goalTypeId;
    this.TeamMemberId = teamMemberId;
    this.GoalCompetencyId = null;
    this.GoalCompetencyTypeId = null;
    this.GoalWIGId = null;
    this.IndustryTeamId = null;
    this.ServiceLineId = null;
    this.Name = '';
    this.GoalDescription = '';
    this.Weight = 5;
    this.Notes = [new Note(this.GoalId)];
    this.Actions = [new Action(this.GoalId)];
  }
}
