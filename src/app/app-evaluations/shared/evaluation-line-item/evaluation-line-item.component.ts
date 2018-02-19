import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-evaluation-line-item',
  templateUrl: './evaluation-line-item.component.html',
  styleUrls: ['./evaluation-line-item.component.css']
})
export class EvaluationLineItemComponent implements OnInit {
  @Input() goalName: string;
  @Input() goalWeight: string;

  ratings = [
    { value: '0', viewValue: '1'},
    { value: '1', viewValue: '2'},
    { value: '2', viewValue: '3'},
    { value: '3', viewValue: '4'},
    { value: '4', viewValue: '5'},
    { value: '5', viewValue: '6'},
    { value: '6', viewValue: '7'},
    { value: '7', viewValue: '8'},
    { value: '8', viewValue: '9'},
    { value: '9', viewValue: '10'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
