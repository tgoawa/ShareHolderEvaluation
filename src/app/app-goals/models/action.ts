export class Action {
  ActionID: number;
  GoalID: number;
  Action: string;
  IsCompleted: boolean;
  IsDirty: boolean;

  constructor(goalId: number) {
    this.ActionID = 0;
    this.GoalID = goalId;
    this.Action = '';
    this.IsCompleted = false;
    this.IsDirty = false;
  }
}
