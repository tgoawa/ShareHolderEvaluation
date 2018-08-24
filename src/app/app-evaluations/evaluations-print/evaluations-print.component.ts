import { Component, OnInit } from '@angular/core';
import { EvaluationModel } from '../shared/models/Evaluation';
import { EvaluationService } from '../shared/services/evaluation.service';
import { TeamMemberService } from '../../core/services/team-member.service';
import { TeamMember } from '../../core/model/team-member';


@Component({
  selector: 'app-evaluations-print',
  templateUrl: './evaluations-print.component.html',
  styleUrls: ['./evaluations-print.component.css'],
})
export class EvaluationsPrintComponent implements OnInit {
  evalData: EvaluationModel;
  displayWIG = false;
  displayCompetency = false;
  displayLeadership = false;
  displayEconomic = false;
  teamMember: TeamMember;
  constructor(private evaluationService: EvaluationService, private teamMemberService: TeamMemberService) {}

  ngOnInit() {
    this.evaluationService.evaluationModel$.subscribe(data => {
      this.evalData = data;
      this.getTeamMember();
    }, error => console.error('Error binding evaluation data to view'));
  }

  print() {
    window.print();
  }

  private getTeamMember() {
    this.teamMemberService.teamMember$.subscribe((data: TeamMember) => {
      this.teamMember = data;
    });
  }

}
