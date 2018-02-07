import { Component, OnInit } from '@angular/core';

import { landingPageData } from '../mock-data/mock-goal-data';
import { Goals } from './main-card/model/goals';

@Component({
  selector: 'app-goals-main',
  templateUrl: './goals-main.component.html',
  styleUrls: ['./goals-main.component.css']
})
export class GoalsMainComponent implements OnInit {
  totalWeight: number;
  goals: Goals[];
  constructor() { }

  ngOnInit() {
    this.goals = landingPageData;
  }

  getGoals() {
    return landingPageData;
  }

}
