import { ChangeDetectionStrategy, Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';
import { Goals, GoalWeightData } from '../model/goals';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainCardComponent implements OnInit, AfterViewInit {
  @Input() data: Goals;
  @Input() route: string;
  @Output() goalWeightData: EventEmitter<GoalWeightData> = new EventEmitter<GoalWeightData>();
  outputData: GoalWeightData;
  totalWeight: number;
  routeName: string;

  constructor() { }

  ngOnInit() {
    this.routeName = this.data.Name.toLocaleLowerCase();
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

  updateTotalWeight() {
    this.totalWeight = this.calculateTotalWeight();
  }

  sendWeightData() {
    this.outputData = new GoalWeightData(this.data.GoalTypeId, this.totalWeight);
    this.goalWeightData.emit(this.outputData);
  }

}
