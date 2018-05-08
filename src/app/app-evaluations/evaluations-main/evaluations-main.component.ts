import { Component, OnInit } from '@angular/core';
import { YearSelectionService } from '../../core/services/year-selection.service';
import { EvaluationService } from '../shared/services/evaluation.service';
import { EvaluationModel } from '../shared/models/Evaluation';

@Component({
  selector: 'app-evaluations-main',
  templateUrl: './evaluations-main.component.html',
  styleUrls: ['./evaluations-main.component.css']
})
export class EvaluationsMainComponent implements OnInit {
  totalScore: Number;
  evaluationData: EvaluationModel;
  teamMemberId = 1936;
  year: number;
  constructor(private yearService: YearSelectionService, private evaluationService: EvaluationService) { }

  ngOnInit() {
    this.yearService.selectedYear$.subscribe(data => {
      this.year = data;
      this.getEvaluations(this.teamMemberId, this.year);
    });
  }

  getEvaluations(teamMemberId: number, year: number) {
    this.evaluationService.getEvaluationModel(teamMemberId, year)
    .subscribe(data => {
      this.evaluationData = data;
    }, error => {
      console.error('Could not bind evaluation model to view');
    });
  }

}
