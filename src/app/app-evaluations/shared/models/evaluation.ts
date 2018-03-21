export interface EvaluationData {
  EvaluationTypeId: number;
  EvaluationItems: EvaluationItem[];
  SelfUseScore: number;
  PICUseScore: number;
  CommitteeUseScore: number;
  FinalUseScore: number;
}

export interface EvaluationItem {
  ItemId: number;
  GoalName: string;
  Comments: string;
  GoalWeight: number;
  SelfScore: number;
  PICScore: number;
  CommitteeScore: number;
}
