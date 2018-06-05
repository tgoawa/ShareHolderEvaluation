import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { Action } from '../../../models/action';

@Component({
  selector: 'app-read-only-action-items',
  templateUrl: './read-only-action-items.component.html',
  styleUrls: ['./read-only-action-items.component.css'],
})
export class ReadOnlyActionItemsComponent implements OnInit {
  @Input() actionItems: FormArray;
  @Input() actionItem: Action;

  actionItemForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.actionItemForm = this.toFormGroup(this.actionItem);
    this.actionItems.push(this.actionItemForm);
  }

  private toFormGroup(data: Action) {
    const formGroup = this.fb.group({
      ActionId: data.ActionId,
      GoalId: data.GoalId,
      Action: [{value: data.Action, disabled: true}],
      IsDirty: [data.IsDirty],
      IsCompleted: data.IsCompleted,
      DisplayDateDue: data.DisplayDateDue
    });

    return formGroup;
  }
}
