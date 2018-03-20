import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-evaluation-card',
  templateUrl: './evaluation-card.component.html',
  styleUrls: ['./evaluation-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvaluationCardComponent implements OnInit {
  @Input() title: string;
  scores = [
    10, 9, 8, 7, 6, 5, 4, 3, 2, 1
  ];
  currentScore = 10;
  constructor() { }

  ngOnInit() {
  }

}
