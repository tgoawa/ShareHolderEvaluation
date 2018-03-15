import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReviewModel } from './model/review';

@Component({
  selector: 'app-goals-review',
  templateUrl: './goals-review.component.html',
  styleUrls: ['./goals-review.component.css']
})
export class GoalsReviewComponent implements OnInit {
  reviewForm: FormGroup;
  data = new ReviewModel();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.reviewForm = this.toFormGroup(this.data);
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
      GeneralNote: data.GeneralNote
    });

    return formGroup;
  }

}
