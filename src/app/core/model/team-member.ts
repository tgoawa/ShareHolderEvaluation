export class TeamMember {
  TeamMemberId: number;
  CoachId: number;
  UserName: string;
  FirstName: string;
  LastName: string;
  LastFirstName: string;
  CoachFirstName: string;
  Location: string;
  BusinessUnit: string;
  IsShareHolder: boolean;
  IndustryTeams: IndustryTeam[]
}

export interface IndustryTeam {
  IndustryTeamId: number;
  TeamName: string;
}
