import { Component, OnInit } from '@angular/core';
import { TeamMember } from '../../core/model/team-member';
import { TeamMemberService } from '../../core/services/team-member.service';
import { YearSelectionService } from '../../core/services/year-selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluations-header',
  templateUrl: './evaluations-header.component.html',
  styleUrls: ['./evaluations-header.component.css']
})
export class EvaluationsHeaderComponent implements OnInit {
  selectedYear: number;
  evalYears: number[];
  teamMember: TeamMember;

  constructor(private evaluationYear: YearSelectionService, private tmService: TeamMemberService, private router: Router) { }

  ngOnInit() {
    this.evalYears = this.evaluationYear.goalYears;
    this.tmService.teamMember$.subscribe(data => {
      this.teamMember = data;
      if (this.teamMember === null) {
        this.router.navigate(['login']);
      }
    });
    this.evaluationYear.selectedEvalYear$.subscribe(data => this.selectedYear = data);
  }

  setYear(year: number) {
    this.evaluationYear.setEvaluationYear(year);
  }

}
