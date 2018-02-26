export interface Goals {
  Name: string;
  Goals: Goal[];
  GoalTypeId: number;
}

export class Goal {
  Name: string;
  Id: number;
  Weight: number;
}

