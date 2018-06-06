import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReviewModel } from './model/review';
import { YearSelectionService } from '../../core/services/year-selection.service';
import { TeamMemberService } from '../../core/services/team-member.service';
import { TeamMember } from '../../core/model/team-member';
import { GoalsService } from '../shared/services/goals.service';

@Component({
  selector: 'app-goals-review',
  templateUrl: './goals-review.component.html',
  styleUrls: ['./goals-review.component.css']
})
export class GoalsReviewComponent implements OnInit {
  reviewForm: FormGroup;
  teamMember: TeamMember;
  year: number;
  reviewModel: ReviewModel;

  constructor(private fb: FormBuilder,
    private goalService: GoalsService,
    private yearService: YearSelectionService,
    private teamMemberService: TeamMemberService) { }

  ngOnInit() {
    this.getData();
  }

  private toFormGroup(data: ReviewModel): FormGroup {
    const formGroup = this.fb.group({
      ReviewId: data.ReviewId,
      TeamMemberId: data.TeamMemberId,
      ReviewerId: data.ReviewerId,
      CreatedDate: [{value: data.CreatedDate, disabled: true}],
      CompetencyNote: data.CompetencyNote,
      WIGNote: data.WIGNote,
      LeadershipNote: data.LeadershipNote,
      EconomicNote: data.EconomicNote,
      GeneralNote: data.GeneralNote,
      Year: data.Year
    });

    return formGroup;
  }

  private getData() {
    this.teamMemberService.teamMember$.subscribe(data => {
      this.teamMember = data;
      this.yearService.selectedGoalYear$.subscribe(val => {
        this.year = val;
        this.getReview(this.teamMember.TeamMemberId, this.year);
      }, error => console.error(error));
    });
  }

  private getReview(teamMemberId: number, year: number) {
    this.goalService.getShareholderReview(teamMemberId, year)
      .subscribe(data => {
        if (data !== null) {
          this.reviewModel = data;
        } else {
          this.setReviewObject();
        }
      }, error => {
        console.error(error);
      });
  }

  private setReviewObject() {
    this.reviewModel = new ReviewModel();
    this.reviewModel.CompetencyNote = '';
    this.reviewModel.CreatedDate = '';
    this.reviewModel.EconomicNote = '';
    this.reviewModel.GeneralNote = '';
    this.reviewModel.LeadershipNote = '';
    this.reviewModel.ReviewerId = undefined;
    this.reviewModel.ReviewId = 0;
    this.reviewModel.TeamMemberId = this.teamMember.TeamMemberId;
    this.reviewModel.WIGNote = '';
    this.reviewModel.Year = this.year;

    this.reviewForm = this.toFormGroup(this.reviewModel);
  }

}
