import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goal-form-card',
  templateUrl: './goal-form-card.component.html',
  styleUrls: ['./goal-form-card.component.css']
})
export class GoalFormCardComponent implements OnInit {
  @Input() goal: any;
  weightValues: number[] = [5, 10, 15, 20, 25, 30, 35, 40];
  constructor() { }

  ngOnInit() {
  }

}
