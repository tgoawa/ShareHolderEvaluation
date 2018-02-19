import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-evaluation-card',
  templateUrl: './evaluation-card.component.html',
  styleUrls: ['./evaluation-card.component.css']
})
export class EvaluationCardComponent implements OnInit {
  @Input() title: string;
  constructor() { }

  ngOnInit() {
  }

}
