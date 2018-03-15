import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-goals-header',
  templateUrl: './goals-header.component.html',
  styleUrls: ['./goals-header.component.css']
})
export class GoalsHeaderComponent implements OnInit {
  selectedYear: number;
  evalYears: number[] = [2018, 2017];
  constructor() { }

  ngOnInit() {
  }

  setYear(year: number) {

  }

}
