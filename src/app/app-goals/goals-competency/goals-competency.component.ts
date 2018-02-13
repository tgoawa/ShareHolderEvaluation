import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Goal } from '../models/goal';

@Component({
  selector: 'app-goals-competency',
  templateUrl: './goals-competency.component.html',
  styleUrls: ['./goals-competency.component.css']
})
export class GoalsCompetencyComponent implements OnInit {
  goal: Goal;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  private setGoal() {
    this.route.params.subscribe(params => {
      if (params['id'] === 0) {
        this.goal = new Goal();
      } else {
        this.goal = this.getGoal(params['id']);
      }
    });
  }

  private getGoal(id: number): Goal {
    // logic to get goal based on id passed through route
    return;
  }

}
