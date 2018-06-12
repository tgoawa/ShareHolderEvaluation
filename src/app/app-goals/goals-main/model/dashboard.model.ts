export interface GoalType {
  GoalType: string;
  GoalTypeId: number;
  Goals: DashboardGoal[];
}

export interface DashboardGoal {
  GoalId: number;
  GoalName: string;
  Weight: number;
}

export interface DashboardModel {
  IsReadOnly: boolean;
  GoalTypes: GoalType[];
}
