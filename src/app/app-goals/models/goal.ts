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
  GoalYear: number;
  DisplayDateCompleted: string;
  Actions: Action[];
  Notes: Note[];

  constructor(goalTypeId: number, teamMemberId: number, goalYear: number) {
    this.GoalId = 0;
    this.GoalTypeId = goalTypeId;
    this.TeamMemberId = teamMemberId;
    this.GoalCompetencyId = 0;
    this.GoalCompetencyTypeId = 0;
    this.GoalWIGId = 0;
    this.IndustryTeamId = 0;
    this.ServiceLineId = 0;
    this.Name = '';
    this.GoalDescription = '';
    this.Weight = 5;
    this.GoalYear = goalYear;
    this.Notes = [new Note(this.GoalId)];
    this.Actions = [new Action(this.GoalId)];
  }
}
