import { Component, Input } from '@angular/core';
import { TeamMember } from '../../../core/model/team-member';
import { DashboardComponent } from '../../evaluations-main/dashboard/dashboard.component';

@Component({
  selector: 'app-evaluation-print-summary',
  templateUrl: './evaluation-print-summary.component.html',
  styleUrls: ['./evaluation-print-summary.component.css'],
})
export class EvaluationPrintSummaryComponent extends DashboardComponent {
  @Input() teamMember: TeamMember;

}
