import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluations-sign-off',
  templateUrl: './evaluations-sign-off.component.html',
  styleUrls: ['./evaluations-sign-off.component.css']
})
export class EvaluationsSignOffComponent implements OnInit {
  picList = [
    {id: 0, name: 'Jay Pic 1'},
    {id: 1, name: 'Jay Pic 2'},
    {id: 2, name: 'Jay Pic 3'},
  ];
  constructor() { }

  ngOnInit() {
  }

}
