import { Component, OnInit, OnChanges, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Action } from '../../../models/action';

@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionsListComponent implements OnInit, OnChanges {
  @Input() parentForm: FormGroup;
  @Input() Actions: Action[];
  @Input() goalId: number;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.parentForm.addControl('Actions', new FormArray([]));
  }

  addAction() {
    const action = {
      ActionID: 0,
      GoalID: this.goalId,
      Action: '',
      IsCompleted: false,
      IsDirty: false
    };
    this.Actions.push(action);
    this.cd.detectChanges();
    return false;
  }

}
