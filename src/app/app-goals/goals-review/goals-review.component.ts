import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-goals-review',
  templateUrl: './goals-review.component.html',
  styleUrls: ['./goals-review.component.css']
})
export class GoalsReviewComponent implements OnInit {
  reviewForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  private toFormGroup(data): FormGroup {
    const formGroup = this.fb.group({
    });

    return formGroup;
  }

}
