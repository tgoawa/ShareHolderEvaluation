import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { Goals } from '../model/goals';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainCardComponent implements OnInit {
  @Input() data: Goals;
  @Input() route: string;
  totalWeight: number;
  routeName: string;

  constructor() { }

  ngOnInit() {
    this.routeName = this.data.Name.toLocaleLowerCase();
    this.totalWeight = this.calculateTotalWeight();
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

}
