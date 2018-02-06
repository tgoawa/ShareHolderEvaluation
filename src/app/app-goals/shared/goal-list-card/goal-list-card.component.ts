import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goal-list-card',
  templateUrl: './goal-list-card.component.html',
  styleUrls: ['./goal-list-card.component.css']
})
export class GoalListCardComponent implements OnInit {
  @Input() goals: string[];
  constructor() { }

  ngOnInit() {
  }

}
