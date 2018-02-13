export class Action {
  ActionId: number;
  GoalId: number;
  IsCompleted: boolean;
  IsDirty: boolean;

  constructor(goalId: number) {
    this.ActionId = 0;
    this.GoalId = goalId;
    this.IsCompleted = false;
    this.IsDirty = false;
  }
}
