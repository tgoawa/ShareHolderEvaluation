import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goal-description-dialog',
  templateUrl: './goal-description-dialog.component.html',
  styleUrls: ['./goal-description-dialog.component.css']
})
export class GoalDescriptionDialogComponent implements OnInit {
  goalName: string;
  goalDescription: string;

  constructor() { }

  ngOnInit() {
  }

}
