export interface Goals {
  Name: string;
  Goals: Goal[];
  GoalTypeId: number;
}

export interface Goal {
  Name: string;
  Id: number;
  Weight: number;
}

