import { Component, OnInit, OnChanges, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { Action } from '../../../models/action';

@Component({
  selector: 'app-action-items',
  templateUrl: './action-items.component.html',
  styleUrls: ['./action-items.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionItemsComponent implements OnInit, OnChanges {
  @Input() actionItems: FormArray;
  @Input() actionItem: Action;

  actionItemForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.actionItemForm = this.toFormGroup(this.actionItem);
    this.actionItems.push(this.actionItemForm);
  }

  private toFormGroup(data: Action) {
    const formGroup = this.fb.group({
      ActionId: data.ActionID,
      GoalId: data.GoalID,
      Action: [data.Action, Validators.required],
      IsDirty: [data.IsDirty],
      IsCompleted: data.IsCompleted
    });

    return formGroup;
  }

  onValueChange() {
    this.actionItemForm.patchValue({
      IsDirty: true
    });
  }

}
