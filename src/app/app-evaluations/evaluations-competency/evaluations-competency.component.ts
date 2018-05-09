import { Component, OnInit } from '@angular/core';
import { EvaluationModel } from '../shared/models/Evaluation';
import { EvaluationService } from '../shared/services/evaluation.service';


@Component({
  selector: 'app-evaluations-competency',
  templateUrl: './evaluations-competency.component.html',
  styleUrls: ['./evaluations-competency.component.css']
})

export class EvaluationsCompetencyComponent implements OnInit {
  evalData: EvaluationModel;
  constructor(private evaluationService: EvaluationService) { }

  ngOnInit() {
    this.evaluationService.evaluationModel$.subscribe(data => {
      this.evalData = data;
    }, error => console.error('Error binding evaluation data to view'));
  }

}
