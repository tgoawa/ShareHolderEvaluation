export class GoalTypeWeightData {
  GoalTypeId: number;
  GoalWeight: number;

  constructor(id: number, weight: number) {
    this.GoalTypeId = id;
    this.GoalWeight = weight;
  }
}

export class GoalWeightModel {
  GoalId: number;
  GoalWeight: number;

  constructor(id: number, weight: number) {
    this.GoalId = id;
    this.GoalWeight = weight;
  }
}
