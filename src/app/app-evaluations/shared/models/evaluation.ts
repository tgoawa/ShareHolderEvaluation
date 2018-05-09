export interface EvaluationModel {
  EvaluationId: number;
  TeamMemberId: number;
  EvaluationScore: number;
  IsShareholderSignOff: boolean;
  IsPICSignOff: boolean;
  IsCommitteeSignOff: boolean;
  EvaluationYear: number;
  PowerLevelId: number;
  EvaluationTypes: GoalTypeEvaluation[];
}

export interface GoalTypeEvaluation {
  GoalTypeEvaluationId: number;
  EvaluationId: number;
  GoalTypeId: number;
  GoalEvaluations: GoalEvaluation[];
  ShareholderScore: number;
  PICScore: number;
  CommitteeScore: number;
  GoalTypeTotalWeight: number;
}

export interface GoalEvaluation {
  GoalEvaluationId: number;
  GoalTypeEvaluationId: number;
  GoalId: number;
  GoalName: string;
  EvaluationNote: string;
  GoalWeight: number;
  ShareHolderScore: number;
  PICScore: number;
  CommitteeScore: number;
}
