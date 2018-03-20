import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-evaluation-line-item',
  templateUrl: './evaluation-line-item.component.html',
  styleUrls: ['./evaluation-line-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvaluationLineItemComponent implements OnInit {
  @Input() goalName: string;
  @Input() goalWeight: string;
  @Output() selfScore: EventEmitter<number> = new EventEmitter<number>();
  @Output() picScore: EventEmitter<number> = new EventEmitter<number>();
  @Output() committeeScore: EventEmitter<number> = new EventEmitter<number>();

  ratings = [ 10, 9, 8, 7, 6, 5, 4, 3, 2 , 1];
  constructor() { }

  ngOnInit() {
  }

  onSelfScoreChange(val: number) {
    this.selfScore.emit(val);
  }
  onPicScoreChange(val: number) {
    this.picScore.emit(val);
  }
  onCommitteeScoreChange(val: number) {
    this.committeeScore.emit(val);
  }

}
