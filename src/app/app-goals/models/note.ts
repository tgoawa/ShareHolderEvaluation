export class Note {
  NoteID: number;
  GoalID: number;
  Note: string;
  IsCompleted: boolean;
  IsDirty: boolean;

  constructor(goalId: number) {
    this.NoteID = 0;
    this.GoalID = goalId;
    this.Note = '';
    this.IsCompleted = false;
    this.IsDirty = false;
  }
}
