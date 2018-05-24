import { Component, OnInit, OnChanges } from '@angular/core';
import { YearSelectionService } from '../../core/services/year-selection.service';
import { EvaluationService } from '../shared/services/evaluation.service';
import { EvaluationModel } from '../shared/models/Evaluation';
import { Observable } from 'rxjs/Observable';
import { PowerLevel } from '../shared/models/powerLevel';

@Component({
  selector: 'app-evaluations-main',
  templateUrl: './evaluations-main.component.html',
  styleUrls: ['./evaluations-main.component.css']
})
export class EvaluationsMainComponent implements OnInit, OnChanges {
  evaluationData: EvaluationModel;
  powerLevelDropdown: PowerLevel;
  teamMemberId = 1936;
  year: number;
  constructor(private yearService: YearSelectionService,
    private evaluationService: EvaluationService) { }

  ngOnInit() {
    this.getPowerLevelDropdown();
    this.yearService.selectedEvalYear$.subscribe(data => {
      this.year = data;
      this.evaluationService.getEvaluationModel(this.teamMemberId, this.year);
    });
    this.evaluationService.evaluationModel$.subscribe(data => {
      this.evaluationData = data;
    }, error => console.error(error));
  }

  ngOnChanges() {
    this.getPowerLevelDropdown();
    this.yearService.selectedEvalYear$.subscribe(data => {
      this.year = data;
      this.evaluationService.getEvaluationModel(this.teamMemberId, this.year);
    });
    this.evaluationService.evaluationModel$.subscribe(data => {
      this.evaluationData = data;
    }, error => console.error(error));
  }

  private getPowerLevelDropdown() {
    this.evaluationService.getPowerLevels()
    .subscribe(data => {
      this.powerLevelDropdown = data;
    }, error => {
      console.error(error);
    });
  }

}
