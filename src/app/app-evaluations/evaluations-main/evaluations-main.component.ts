import { Component, OnInit, OnChanges } from '@angular/core';
import { YearSelectionService } from '../../core/services/year-selection.service';
import { EvaluationService } from '../shared/services/evaluation.service';
import { EvaluationModel } from '../shared/models/Evaluation';
import { PowerLevel } from '../shared/models/powerLevel';
import { TeamMemberService } from '../../core/services/team-member.service';
import { TeamMember } from '../../core/model/team-member';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluations-main',
  templateUrl: './evaluations-main.component.html',
  styleUrls: ['./evaluations-main.component.css']
})
export class EvaluationsMainComponent implements OnInit, OnChanges {
  evaluationData: EvaluationModel;
  powerLevelDropdown: PowerLevel;
  teamMember: TeamMember;
  year: number;
  constructor(private yearService: YearSelectionService,
    private teamMemberService: TeamMemberService,
    private evaluationService: EvaluationService,
    private router: Router) { }

  ngOnInit() {
    this.getPowerLevelDropdown();
    this.getData();
    this.evaluationService.evaluationModel$.subscribe(data => {
      this.evaluationData = data;
    }, error => console.error(error));
  }

  ngOnChanges() {
    this.getPowerLevelDropdown();
    this.getData();
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

  private getData() {
    this.teamMemberService.teamMember$
      .subscribe(teamMemberObject => {
        this.teamMember = teamMemberObject;
        if (this.teamMember === null || this.teamMember.TeamMemberId === null || this.teamMember.TeamMemberId === 0) {
          this.router.navigate(['/login']);
        } else {
          this.yearService.selectedEvalYear$.subscribe(data => {
            this.year = data;
            this.evaluationService.getEvaluationModel(this.teamMember.TeamMemberId, this.year);
          }, error => {
            console.error(error);
          });
        }
      }, error => {
        console.error('Could not retrieve team member data!');
      });
  }

}
