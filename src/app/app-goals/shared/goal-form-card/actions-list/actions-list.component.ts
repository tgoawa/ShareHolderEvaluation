import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-actions-list',
  templateUrl: './actions-list.component.html',
  styleUrls: ['./actions-list.component.css']
})
export class ActionsListComponent implements OnInit {
  @Input() parentForm;
  @Input() Actions = [];
  @Input() goalId: number;
  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit() {
  }

  addAction() {
    const action = {
      ActionId: 0,
      GoalId: this.goalId,
      Action: '',
      IsCompleted: false,
    };
    this.Actions.push(action);
    this.cd.detectChanges();
    return false;
  }

}
