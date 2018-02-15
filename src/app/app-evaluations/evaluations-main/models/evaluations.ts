export interface Evaluations {
  Name: string;
  Evaluations: Evaluation[];
  EvaluationTypeId: number;
}

export interface Evaluation {
  Name: string;
  Id: number;
  Score: number;
}
