export interface DashboardModel {
  GoalType: string;
  GoalTypeId: number;
  Goals: DashboardGoal[];
}

export interface DashboardGoal {
  GoalId: number;
  GoalName: string;
  Weight: number;
}
