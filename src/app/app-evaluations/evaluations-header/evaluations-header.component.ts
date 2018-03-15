import { Component, OnInit } from '@angular/core';
import { EvaluationYearService } from '../shared/services/evaluation-year.service';

@Component({
  selector: 'app-evaluations-header',
  templateUrl: './evaluations-header.component.html',
  styleUrls: ['./evaluations-header.component.css']
})
export class EvaluationsHeaderComponent implements OnInit {
  selectedYear: number;
  evalYears: number[] = [2018, 2017];

  constructor(private evaluationYear: EvaluationYearService) { }

  ngOnInit() {
    this.evaluationYear.selectedYear$.subscribe(data => this.selectedYear = data);
  }

  setYear(year: number) {
    this.evaluationYear.setEvaluationYear(year);
  }

}
