import { Component, OnInit } from '@angular/core';
import { Goal } from '../models/goal';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goals-leadership',
  templateUrl: './goals-leadership.component.html',
  styleUrls: ['./goals-leadership.component.css']
})
export class GoalsLeadershipComponent implements OnInit {
  goal: Goal;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.setGoal(3, 1936);
  }

  private setGoal(goalTypeId: number, teamMemberId: number) {
    this.route.params.subscribe(params => {
      if (params['id'] === '0') {
        this.goal = new Goal(goalTypeId, teamMemberId);
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
