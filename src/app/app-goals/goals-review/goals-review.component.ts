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
      ReviewDate: [{value: data.ReviewDate, disabled: true}],
      CompetencyNotes: data.CompetencyNotes,
      WIGNotes: data.WIGNotes,
      LeadershipNotes: data.LeadershipNotes,
      EconomicNotes: data.EconomicNotes,
      GeneralNotes: data.GeneralNotes
    });

    return formGroup;
  }

}
