import { Component, OnInit, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { GoalEvaluation } from '../models/Evaluation';
import { ScoreDictionary } from '../models/score-dictionary';

@Component({
  selector: 'app-evaluation-line-item',
  templateUrl: './evaluation-line-item.component.html',
  styleUrls: ['./evaluation-line-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvaluationLineItemComponent implements OnInit {
  @Input() evalItem: GoalEvaluation;
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
    this.itemId = this.evalItem.GoalEvaluationId;
    this.itemName = this.evalItem.GoalName;
    this.comments = this.evalItem.EvaluationNote;
    this.weight = this.evalItem.GoalWeight;
    this.itemSelfScore = this.evalItem.ShareHolderScore;
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
