import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../../goals-main/model/goals';

@Component({
  selector: 'app-goal-list-item',
  templateUrl: './goal-list-item.component.html',
  styleUrls: ['./goal-list-item.component.css']
})
export class GoalListItemComponent implements OnInit {
  @Input() goal: Goal;
  @Output() goalToView: EventEmitter<Goal> = new EventEmitter<Goal>();
  isActive = false;
  weightValues: number[] = [0, 5, 10, 15, 20, 25, 30, 35, 40];
  constructor() { }

  ngOnInit() {
  }

  selectGoal(goal: Goal) {
    this.isActive = true;
    this.goalToView.emit(goal);
  }

}
