import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../../models/goal';
import { GoalWeightModel } from '../../goals-main/model/weight';
import { GoalsService } from '../services/goals.service';

@Component({
  selector: 'app-goal-list-card',
  templateUrl: './goal-list-card.component.html',
  styleUrls: ['./goal-list-card.component.css']
})
export class GoalListCardComponent implements OnInit {
  @Input() goals: Goal[];
  @Output() goal: EventEmitter<Goal> = new EventEmitter<Goal>();
  weightValues: number[] = [0, 5, 10, 15, 20, 25, 30, 35, 40];

  constructor(private goalService: GoalsService) { }

  ngOnInit() {

  }

  selectGoal(goal: Goal) {
    this.goal.emit(goal);
  }

  onWeightChange(goal: Goal) {
    const goalWeightModel = new GoalWeightModel(goal.GoalId, goal.Weight);
    this.goalService.updateGoalWeight(goalWeightModel)
    .subscribe(data => {
      if (data) {
        console.log('Goal Weight Updated');
      }
    }, error => {
      console.log('Error updating weight data');
    });
  }

}
