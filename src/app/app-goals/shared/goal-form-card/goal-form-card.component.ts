import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-goal-form-card',
  templateUrl: './goal-form-card.component.html',
  styleUrls: ['./goal-form-card.component.css']
})
export class GoalFormCardComponent implements OnInit {
  @Input() goal: any;
  constructor() { }

  ngOnInit() {
  }

}
