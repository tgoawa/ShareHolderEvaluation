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
    this.setGoal();
  }

  private setGoal() {
    this.route.params.subscribe(params => {
      if (params['id'] === '0') {
        this.goal = new Goal(1, 1936);
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
