import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { EvaluationItem } from '../models/Evaluation';

@Component({
  selector: 'app-evaluation-line-item',
  templateUrl: './evaluation-line-item.component.html',
  styleUrls: ['./evaluation-line-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvaluationLineItemComponent implements OnInit {
  @Input() evalItem: EvaluationItem;
  @Output() selfScore: EventEmitter<number> = new EventEmitter<number>();
  @Output() picScore: EventEmitter<number> = new EventEmitter<number>();
  @Output() committeeScore: EventEmitter<number> = new EventEmitter<number>();

  itemId: number;
  itemName: string;
  comments: string;
  weight: number;
  itemSelfScore: number;
  itemPicScore: number;
  itemCommitteeScore: number;

  ratings = [ 10, 9, 8, 7, 6, 5, 4, 3, 2 , 1];
  constructor() { }

  ngOnInit() {
    this.itemId = this.evalItem.ItemId;
    this.itemName = this.evalItem.ItemName;
    this.comments = this.evalItem.Comments;
    this.weight = this.evalItem.Weight;
    this.itemSelfScore = this.evalItem.SelfScore;
    this.itemPicScore = this.evalItem.PICScore;
    this.itemCommitteeScore = this.evalItem.CommitteeScore;
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
