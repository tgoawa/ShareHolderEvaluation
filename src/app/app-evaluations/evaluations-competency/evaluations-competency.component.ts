import { Component, OnInit } from '@angular/core';
import { EvaluationData } from '../shared/models/Evaluation';

const data: EvaluationData = {
  EvaluationTypeId: 1,
  EvaluationItems: [
    {
      ItemId: 1,
      GoalName: 'Test Goal 1',
      Comments: 'Test comment 1',
      GoalWeight: 10,
      SelfScore: 6,
      PICScore: 5,
      CommitteeScore: 6
    },
    {
      ItemId: 2,
      GoalName: 'Test Goal 2',
      Comments: 'Test comment 2',
      GoalWeight: 5,
      SelfScore: 5,
      PICScore: 6,
      CommitteeScore: 6
    },
    {
      ItemId: 3,
      GoalName: 'Test Goal 3',
      Comments: 'Test comment 3',
      GoalWeight: 5,
      SelfScore: 7,
      PICScore: 8,
      CommitteeScore: 6
    }
  ],
  SelfUseScore: 1,
  PICUseScore: 1,
  CommitteeUseScore: 1,
  FinalUseScore: 1
};

@Component({
  selector: 'app-evaluations-competency',
  templateUrl: './evaluations-competency.component.html',
  styleUrls: ['./evaluations-competency.component.css']
})

export class EvaluationsCompetencyComponent implements OnInit {
  evalData: EvaluationData;
  constructor() { }

  ngOnInit() {
    this.evalData = data;
  }

}
