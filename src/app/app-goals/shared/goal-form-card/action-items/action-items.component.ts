import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-action-items',
  templateUrl: './action-items.component.html',
  styleUrls: ['./action-items.component.css']
})
export class ActionItemsComponent implements OnInit {
  @Input() actionItems;
  @Input() actionItem;

  actionItemForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  private toFormGroup(data: Action) {
    const formGroup = this.fb.group({
      ActionId: data.Actionid,
      GoalId: data.GoalId,
      Action: [data.Action, Validators.required],
      IsCompleted: data.IsCompleted
    });

    return formGroup;
  }

}
