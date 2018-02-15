export interface Evaluations {
  Name: string;
  Goals: Evaluation[];
  GoalTypeId: number;
}

export interface Evaluation {
  Name: string;
  Id: number;
  Score: number;
}
