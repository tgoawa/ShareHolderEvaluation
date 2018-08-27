import { Component } from '@angular/core';
import { EvaluationsMainComponent } from '../evaluations-main/evaluations-main.component';


@Component({
  selector: 'app-evaluations-print',
  templateUrl: './evaluations-print.component.html',
  styleUrls: ['./evaluations-print.component.css'],
})
export class EvaluationsPrintComponent extends EvaluationsMainComponent {
  displaySummary = true;
  displayWIG = true;
  displayCompetency = true;
  displayLeadership = true;
  displayEconomic = true;

  print() {
    window.print();
  }

}
