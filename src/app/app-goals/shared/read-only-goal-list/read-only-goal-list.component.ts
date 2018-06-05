import { Component, OnInit } from '@angular/core';
import { GoalListCardComponent } from '../goal-list-card/goal-list-card.component';

@Component({
  selector: 'app-read-only-goal-list',
  templateUrl: './read-only-goal-list.component.html',
  styleUrls: ['./read-only-goal-list.component.css']
})
export class ReadOnlyGoalListComponent extends GoalListCardComponent {

}
