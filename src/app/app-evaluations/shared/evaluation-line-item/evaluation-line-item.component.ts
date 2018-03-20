import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-evaluation-line-item',
  templateUrl: './evaluation-line-item.component.html',
  styleUrls: ['./evaluation-line-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvaluationLineItemComponent implements OnInit {
  @Input() goalName: string;
  @Input() goalWeight: string;

  ratings = [ 10, 9, 8, 7, 6, 5, 4, 3, 2 , 1];
  constructor() { }

  ngOnInit() {
  }

}
