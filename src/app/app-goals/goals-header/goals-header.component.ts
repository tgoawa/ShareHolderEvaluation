import { Component, OnInit } from '@angular/core';
import { YearSelectionService } from '../shared/services/year-selection.service';
import { TeamMember } from '../../core/model/team-member';
import { Observable } from 'rxjs/Observable';
import { TeamMemberService } from '../../core/services/team-member.service';

@Component({
  selector: 'app-goals-header',
  templateUrl: './goals-header.component.html',
  styleUrls: ['./goals-header.component.css']
})
export class GoalsHeaderComponent implements OnInit {
  selectedYear: number;
  evalYears: number[] = [2018, 2017];
  teamMember: TeamMember;

  constructor(private yearService: YearSelectionService, private tmService: TeamMemberService) { }

  ngOnInit() {
    this.tmService.teamMember$.subscribe(data => this.teamMember = data);
    this.yearService.selectedYear$.subscribe(data => this.selectedYear = data);
  }

  setYear(year: number) {
    this.yearService.setEvaluationYear(year);
  }

}
