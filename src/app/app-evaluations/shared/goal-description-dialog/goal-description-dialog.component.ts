import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-goal-description-dialog',
  templateUrl: './goal-description-dialog.component.html',
  styleUrls: ['./goal-description-dialog.component.css']
})
export class GoalDescriptionDialogComponent implements OnInit {
  goalName: string;
  goalDescription: string;

  constructor(private dialogRef: MatDialogRef<GoalDescriptionDialogComponent>, @Inject(MAT_DIALOG_DATA) data) {
    this.goalName = data.goalName;
    this.goalDescription = data.goalDescription;
  }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
