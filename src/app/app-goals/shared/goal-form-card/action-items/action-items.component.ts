import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Action } from '../../../models/action';


@Component({
  selector: 'app-action-items',
  templateUrl: './action-items.component.html',
  styleUrls: ['./action-items.component.css']
})
export class ActionItemsComponent implements OnInit {
  @Input() actionItem: Action;

  actionItemForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.actionItemForm = this.toFormGroup(this.actionItem);
  }

  private toFormGroup(data: Action) {
    const formGroup = this.fb.group({
      ActionId: data.ActionID,
      GoalId: data.GoalID,
      Action: [data.Action, Validators.required],
      IsCompleted: data.IsCompleted
    });

    return formGroup;
  }

}
