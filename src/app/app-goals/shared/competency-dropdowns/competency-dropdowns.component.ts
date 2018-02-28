import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { DropdownsService, Competency, CompetencyType } from '../services/dropdowns.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-competency-dropdowns',
  templateUrl: './competency-dropdowns.component.html',
  styleUrls: ['./competency-dropdowns.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompetencyDropdownsComponent implements OnInit {
  @Input() parentForm: FormGroup;
  @Input() competencies: Competency[];
  @Input() competencyTypes: CompetencyType[];

  constructor() { }

  ngOnInit() {

  }

}
