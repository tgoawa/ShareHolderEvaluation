import { Component, OnInit } from '@angular/core';
import { EvaluationModel } from '../shared/models/Evaluation';
import { EvaluationService } from '../shared/services/evaluation.service';

@Component({
  selector: 'app-evaluations-economic',
  templateUrl: './evaluations-economic.component.html',
  styleUrls: ['./evaluations-economic.component.css']
})
export class EvaluationsEconomicComponent implements OnInit {
  evalData: EvaluationModel;
  constructor(private evaluationService: EvaluationService) { }

  ngOnInit() {
    this.evaluationService.evaluationModel$.subscribe(data => {
      this.evalData = data;
    }, error => console.error('Error binding evaluation data to view'));
  }

}
