import { Component, OnInit } from '@angular/core';
import { EvaluationModel } from '../shared/models/Evaluation';
import { EvaluationService } from '../shared/services/evaluation.service';
import { EconomicGoalModel } from '../../app-goals/models/economic-goal';
import { YearSelectionService } from '../../core/services/year-selection.service';

@Component({
  selector: 'app-evaluations-economic',
  templateUrl: './evaluations-economic.component.html',
  styleUrls: ['./evaluations-economic.component.css']
})
export class EvaluationsEconomicComponent implements OnInit {
  currentYearHeading = ' Goals';
  economicGoal: EconomicGoalModel;
  previousYearActualHeading = 'Actuals ending June 30, ';
  evalData: EvaluationModel;
  teamMemberId = 1936;
  year: number;
  previousYear: number;
  constructor(private evaluationService: EvaluationService, private yearService: YearSelectionService) { }

  ngOnInit() {
    this.yearService.selectedEvalYear$.subscribe(data => {
      this.year = data;
      this.getEconomicGoal(this.teamMemberId, this.year);
      this.previousYear = this.year - 1;
    });

    this.evaluationService.evaluationModel$.subscribe(data => {
      this.evalData = data;
    }, error => console.error('Error binding evaluation data to view'));
  }

  private getEconomicGoal(teamMemberId: number, year: number) {
    this.evaluationService.getEconomicGoals(teamMemberId, year).subscribe(
      data => {
        this.economicGoal = data;
      },
      error => {
        console.log(error);
      }
    );
  }

}
