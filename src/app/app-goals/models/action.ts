export class Action {
  ActionId: number;
  GoalId: number;
  Action: string;
  IsCompleted: boolean;
  IsDirty: boolean;
  DisplayDateDue: string;

  constructor(goalId: number) {
    this.ActionId = 0;
    this.GoalId = goalId;
    this.Action = '';
    this.IsCompleted = false;
    this.IsDirty = false;
  }
}
