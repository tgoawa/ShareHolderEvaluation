import { Component, OnInit } from '@angular/core';
import { EvaluationYearService } from '../shared/services/evaluation-year.service';
import { TeamMember } from '../../core/model/team-member';
import { TeamMemberService } from '../../core/services/team-member.service';

@Component({
  selector: 'app-evaluations-header',
  templateUrl: './evaluations-header.component.html',
  styleUrls: ['./evaluations-header.component.css']
})
export class EvaluationsHeaderComponent implements OnInit {
  selectedYear: number;
  evalYears: number[] = [2018, 2017];
  teamMember: TeamMember;

  constructor(private evaluationYear: EvaluationYearService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.tmService.teamMember$.subscribe(data => this.teamMember = data);
    this.evaluationYear.selectedYear$.subscribe(data => this.selectedYear = data);
  }

  setYear(year: number) {
    this.evaluationYear.setEvaluationYear(year);
  }

}
