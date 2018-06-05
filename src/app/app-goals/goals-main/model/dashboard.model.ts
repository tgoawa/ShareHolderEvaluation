export interface DashboardModel {
  GoalType: string;
  GoalTypeId: number;
  Goals: DashboardGoal[];
  IsReadOnly: boolean;
}

export interface DashboardGoal {
  GoalId: number;
  GoalName: string;
  Weight: number;
}
