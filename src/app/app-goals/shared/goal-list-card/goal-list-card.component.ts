import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GoalData } from '../../models/goal';
import { GoalWeightModel } from '../../goals-main/model/weight';
import { GoalsService } from '../services/goals.service';

@Component({
  selector: 'app-goal-list-card',
  templateUrl: './goal-list-card.component.html',
  styleUrls: ['./goal-list-card.component.css']
})
export class GoalListCardComponent implements OnInit {
  @Input() goals: GoalData[];
  @Output() goal: EventEmitter<GoalData> = new EventEmitter<GoalData>();
  @Output() goalWeightModel: EventEmitter<GoalWeightModel> = new EventEmitter<GoalWeightModel>();
  selectedItemId: number;
  weightValues: number[] = [0, 5, 10, 15, 20, 25, 30, 35, 40];

  constructor(private goalService: GoalsService) { }

  ngOnInit() {

  }

  onWeightChange(goal: GoalData) {
    const goalWeightModel = new GoalWeightModel(goal.GoalId, goal.Weight);
    this.goalService.updateGoalWeight(goalWeightModel)
    .subscribe(data => {
      if (data) {
        this.weightChange(goal);
        console.log('Goal Weight Updated');
      }
    }, error => {
      console.log('Error updating weight data');
    });
  }

  selectGoal(goal: GoalData) {
    this.selectedItemId = goal.GoalId;
    this.goal.emit(goal);
  }

  weightChange(goalData: GoalData) {
    const _goalWeightModel = new GoalWeightModel(goalData.GoalId, goalData.Weight);
    this.goalWeightModel.emit(_goalWeightModel);
  }

}
