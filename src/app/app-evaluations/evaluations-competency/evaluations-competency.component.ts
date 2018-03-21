import { Component, OnInit } from '@angular/core';
import { EvaluationData } from '../shared/models/Evaluation';

const data: EvaluationData = {
  EvaluationTypeId: 1,
  EvaluationItems: [
    {
      ItemId: 1,
      ItemName: 'Test Goal 1',
      Comments: 'Test comment 1',
      Weight: 10,
      SelfScore: 6,
      PICScore: 5,
      CommitteeScore: 6
    },
    {
      ItemId: 2,
      ItemName: 'Test Goal 2',
      Comments: 'Test comment 2',
      Weight: 5,
      SelfScore: 5,
      PICScore: 6,
      CommitteeScore: 6
    },
    {
      ItemId: 3,
      ItemName: 'Test Goal 3',
      Comments: 'Test comment 3',
      Weight: 5,
      SelfScore: 7,
      PICScore: 8,
      CommitteeScore: 6
    }
  ],
  SelfUseScore: 0,
  PICUseScore: 0,
  CommitteeUseScore: 0,
  FinalUseScore: 0
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
