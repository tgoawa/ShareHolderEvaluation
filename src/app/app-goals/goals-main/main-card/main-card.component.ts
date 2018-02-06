import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-card',
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainCardComponent implements OnInit {
  @Input() sectionTitle: string;
  @Input() goals: string[];
  @Input() route: string;
  totalWeight: number;

  constructor() { }

  ngOnInit() {
  }

  calculateTotalWeight(weight: number) {
    let calculatedWeight;
    calculatedWeight = calculatedWeight + weight;
    return calculatedWeight;
  }

}
