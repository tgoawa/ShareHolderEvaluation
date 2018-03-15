import { Component, OnInit } from '@angular/core';
import { YearSelectionService } from '../shared/services/year-selection.service';

@Component({
  selector: 'app-goals-header',
  templateUrl: './goals-header.component.html',
  styleUrls: ['./goals-header.component.css']
})
export class GoalsHeaderComponent implements OnInit {
  selectedYear: number;
  evalYears: number[] = [2018, 2017];

  constructor(private yearService: YearSelectionService) { }

  ngOnInit() {
    this.yearService.selectedYear$.subscribe(data => this.selectedYear = data);
  }

  setYear(year: number) {
    this.yearService.setEvaluationYear(year);
  }

}
