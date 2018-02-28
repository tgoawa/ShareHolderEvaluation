export class Note {
  NoteId: number;
  GoalId: number;
  Note: string;
  IsCompleted: boolean;
  IsDirty: boolean;

  constructor(goalId: number) {
    this.NoteId = 0;
    this.GoalId = goalId;
    this.Note = '';
    this.IsCompleted = false;
    this.IsDirty = false;
  }
}
