import { ChangeDetectionStrategy, Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { GoalTypeWeightData, GoalWeightModel } from '../model/weight';
import { DashboardGoal, DashboardModel } from '../model/dashboard.model';
import { GoalsService } from '../../shared/services/goals.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainCardComponent implements OnInit, AfterViewInit {
  @Input() data: DashboardModel;
  @Input() route: string;
  @Output() goalWeightData: EventEmitter<GoalTypeWeightData> = new EventEmitter<GoalTypeWeightData>();
  weightValues: number[] = [5, 10, 15, 20, 25, 30, 35, 40];
  outputData: GoalTypeWeightData;
  totalWeight: number;
  routeName: string;

  constructor(public snackBar: MatSnackBar, private goalService: GoalsService) { }

  ngOnInit() {
    this.routeName = this.data.GoalType.toLocaleLowerCase();
    this.totalWeight = this.calculateTotalWeight();
  }

  ngAfterViewInit() {
    this.sendWeightData();
  }

  calculateTotalWeight() {
    const data = this.data.Goals;
    let value = 0;
    for (let x = 0; x < data.length; x++) {
      if (data[x].Weight !== null) {
        value = value + data[x].Weight;
      }
    }
    return value;
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  updateGoalWeight(goalWeightData: GoalWeightModel) {
    this.goalService.updateGoalWeight(goalWeightData)
    .subscribe(data => {
      if (data) {
        this.totalWeight = this.calculateTotalWeight();
        this.sendWeightData();
        this.openSnackBar('Weight updated successfully!', '');
      }
    }, error => {
      console.log('Error updating the weight data');
    });
  }

  updateTotalWeight(dashboardGoal: DashboardGoal) {
    const updateData: GoalWeightModel = new GoalWeightModel(dashboardGoal.GoalId, dashboardGoal.Weight);
    console.log(updateData);
    this.updateGoalWeight(updateData);
  }

  sendWeightData() {
    this.outputData = new GoalTypeWeightData(this.data.GoalTypeId, this.totalWeight);
    this.goalWeightData.emit(this.outputData);
  }

}
