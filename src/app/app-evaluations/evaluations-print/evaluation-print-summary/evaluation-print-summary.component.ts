import { Component, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { PowerLevel } from '../../shared/models/powerLevel';
import { EvaluationModel } from '../../shared/models/Evaluation';
import { TeamMember } from '../../../core/model/team-member';
import { TeamMemberService } from '../../../core/services/team-member.service';

@Component({
  selector: 'app-evaluation-print-summary',
  templateUrl: './evaluation-print-summary.component.html',
  styleUrls: ['./evaluation-print-summary.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvaluationPrintSummaryComponent implements OnChanges {
  @Input() evalData: EvaluationModel;
  @Input() teamMember: TeamMember;

  finalScore: number;
  shareHolderScore: number;
  picScore: number;
  consensusScore: number;
  powerLevel: PowerLevel;
  year: number;
  constructor(private teamMemberService: TeamMemberService) { }

  ngOnChanges() {

  }

  private mapData() {
    this.finalScore = this.evalData.EvaluationScore;

  }

}
