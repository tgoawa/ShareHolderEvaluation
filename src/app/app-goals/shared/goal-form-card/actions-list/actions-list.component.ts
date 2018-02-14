import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Action } from '../../../models/action';

@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.css']
})
export class ActionsListComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() Actions: Action[];
  @Input() goalId: number;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.parentForm.addControl('Actions', new FormArray([]));
  }

  addAction() {
    const action = {
      ActionId: 0,
      GoalId: this.goalId,
      Action: '',
      IsCompleted: false,
      IsDirty: false
    };
    this.Actions.push(action);
    this.cd.detectChanges();
    return false;
  }

}