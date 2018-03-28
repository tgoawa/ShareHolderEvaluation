import { Component, OnInit, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { DashboardModel, DashboardGoal } from '../model/dashboard.model';
import { GoalTypeWeightData, GoalWeightModel } from '../model/weight';
import { GoalsService } from '../../shared/services/goals.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-economic-card',
  templateUrl: './economic-card.component.html',
  styleUrls: ['./economic-card.component.css']
})
export class EconomicCardComponent implements OnInit, AfterViewInit {
  @Input() data: DashboardModel;
  @Input() route: string;
  @Output() goalWeightData: EventEmitter<GoalTypeWeightData> = new EventEmitter<GoalTypeWeightData>();
  weightValues: number[] = [5, 10, 15, 20, 25, 30, 35, 40];
  outputData: GoalTypeWeightData;
  totalWeight: number;
  routeName: string;

  constructor(private goalService: GoalsService, private snackBar: MatSnackBar) { }

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
    this.goalService.updateEconomicGoalWeight(goalWeightData)
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
