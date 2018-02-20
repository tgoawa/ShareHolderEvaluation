import { Component, OnInit} from '@angular/core';
import { Goal } from '../models/goal';
import { ActivatedRoute } from '@angular/router';
import { GoalsService } from '../shared/services/goals.service';

@Component({
  selector: 'app-goals-competency',
  templateUrl: './goals-competency.component.html',
  styleUrls: ['./goals-competency.component.css']
})
export class GoalsCompetencyComponent implements OnInit {
  goals: Goal[];
  goal: Goal;
  constructor(private route: ActivatedRoute, private goalsService: GoalsService) { }

  ngOnInit() {
    this.getGoals(1936);
    this.setGoal(3, 1936);
  }

  private setGoal(goalTypeId: number, teamMemberId: number) {
    this.route.params.subscribe(params => {
      if (params['id'] === '0') {
        this.goal = new Goal(goalTypeId, teamMemberId);
      } else {
        // this.getGoal(params['id']);
      }
    });
  }

  setExistingGoal(goal: Goal) {
    this.goal = goal;
  }

  private getGoals(id: number) {
    this.goalsService.getGoals(id)
    .subscribe(data => {
      this.goals = data;
    }, error => {
      console.log('Could not retrieve list of goals');
    });
  }
}
