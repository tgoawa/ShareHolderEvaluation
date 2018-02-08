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

export class GoalWeightData {
  Id: number;
  Weight: number;

  constructor(id: number, weight: number) {
    this.Id = id;
    this.Weight = weight;
  }
}
