import { Component, OnInit } from '@angular/core';
import { GoalTypeEvaluation } from '../shared/models/Evaluation';

// const data: GoalTypeEvaluation = {
//   GoalTypeEvaluationId: 1,
//   EvaluationItems: [
//     {
//       GoalEvaluationId: 1,
//       GoalName: 'Test Goal 1',
//       EvaluationNote: 'Test comment 1',
//       GoalWeight: 10,
//       ShareHolderScore: 6,
//       PICScore: 5,
//       CommitteeScore: 6
//     },
//     {
//       GoalEvaluationId: 2,
//       GoalName: 'Test Goal 2',
//       EvaluationNote: 'Test comment 2',
//       GoalWeight: 5,
//       ShareHolderScore: 5,
//       PICScore: 6,
//       CommitteeScore: 6
//     },
//     {
//       GoalEvaluationId: 3,
//       GoalName: 'Test Goal 3',
//       EvaluationNote: 'Test comment 3',
//       GoalWeight: 5,
//       ShareHolderScore: 7,
//       PICScore: 8,
//       CommitteeScore: 6
//     }
//   ],
//   ShareHolderScore: 1,
//   PICScore: 1,
//   CommitteeScore: 1
// };

@Component({
  selector: 'app-evaluations-competency',
  templateUrl: './evaluations-competency.component.html',
  styleUrls: ['./evaluations-competency.component.css']
})

export class EvaluationsCompetencyComponent implements OnInit {
  evalData: GoalTypeEvaluation;
  constructor() { }

  ngOnInit() {
    // this.evalData = data;
  }

}
