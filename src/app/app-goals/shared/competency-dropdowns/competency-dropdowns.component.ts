import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-competency-dropdowns',
  templateUrl: './competency-dropdowns.component.html',
  styleUrls: ['./competency-dropdowns.component.css']
})
export class CompetencyDropdownsComponent implements OnInit {
  @Input() parentForm;
  constructor() { }

  ngOnInit() {
  }

}
