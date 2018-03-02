import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-economic-goal-detail',
  templateUrl: './economic-goal-detail.component.html',
  styleUrls: ['./economic-goal-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EconomicGoalDetailComponent implements OnInit {
  @Input() parentForm: FormGroup;
  constructor() { }

  ngOnInit() {
  }
}
