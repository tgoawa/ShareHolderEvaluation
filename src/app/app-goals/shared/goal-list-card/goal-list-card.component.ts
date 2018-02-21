import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Goal } from '../../goals-main/model/goals';

@Component({
  selector: 'app-goal-list-card',
  templateUrl: './goal-list-card.component.html',
  styleUrls: ['./goal-list-card.component.css']
})
export class GoalListCardComponent implements OnInit {
  @Input() goals: Goal[];
  @Output() goal: EventEmitter<Goal> = new EventEmitter<Goal>();
  isActive = false;
  weightValues: number[] = [0, 5, 10, 15, 20, 25, 30, 35, 40];
  constructor() { }

  ngOnInit() {

  }

  selectGoal(goal: Goal) {
    this.isActive = true;
    this.goal.emit(goal);
  }

}
