import { Component, OnInit } from '@angular/core';
import { EvaluationCardComponent } from '../evaluation-card/evaluation-card.component';

@Component({
  selector: 'app-read-only-evaluation-card',
  templateUrl: './read-only-evaluation-card.component.html',
  styleUrls: ['./read-only-evaluation-card.component.css']
})
export class ReadOnlyEvaluationCardComponent extends EvaluationCardComponent {

}
