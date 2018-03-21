import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { EvaluationItem } from '../models/Evaluation';
import { ScoreDictionary } from '../models/score-dictionary';

@Component({
  selector: 'app-evaluation-line-item',
  templateUrl: './evaluation-line-item.component.html',
  styleUrls: ['./evaluation-line-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvaluationLineItemComponent implements OnInit {
  @Input() evalItem: EvaluationItem;
  @Output() selfScore: EventEmitter<ScoreDictionary> = new EventEmitter<ScoreDictionary>();
  @Output() picScore: EventEmitter<ScoreDictionary> = new EventEmitter<ScoreDictionary>();
  @Output() committeeScore: EventEmitter<ScoreDictionary> = new EventEmitter<ScoreDictionary>();

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

  onSelfScoreChange() {
    const outputData = new ScoreDictionary();
    outputData.id = this.itemId;
    outputData.value = this.itemSelfScore;
    this.selfScore.emit(outputData);
  }
  onPicScoreChange() {
    const outputData = new ScoreDictionary();
    outputData.id = this.itemId;
    outputData.value = this.itemPicScore;
    this.picScore.emit(outputData);
  }
  onCommitteeScoreChange() {
    const outputData = new ScoreDictionary();
    outputData.id = this.itemId;
    outputData.value = this.itemCommitteeScore;
    this.committeeScore.emit(outputData);
  }

}
