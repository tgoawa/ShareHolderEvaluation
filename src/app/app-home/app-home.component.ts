import { Component, OnInit } from '@angular/core';
import { YearSelectionService } from '../core/services/year-selection.service';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {
  selectedYear: number;
  evalYears: number[] = [2018, 2017];

  constructor(private yearService: YearSelectionService) { }

  ngOnInit() {
    this.yearService.selectedYear$.subscribe(data => this.selectedYear = data);
  }

  setEvaluationYear(year: number) {
    this.yearService.setEvaluationYear(year);
  }

}
