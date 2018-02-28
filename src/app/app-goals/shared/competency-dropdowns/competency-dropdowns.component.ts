import { Component, OnInit, Input } from '@angular/core';
import { DropdownsService, Competency, CompetencyType } from '../services/dropdowns.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-competency-dropdowns',
  templateUrl: './competency-dropdowns.component.html',
  styleUrls: ['./competency-dropdowns.component.css']
})
export class CompetencyDropdownsComponent implements OnInit {
  @Input() parentForm: FormGroup;
  competencies: Competency[];
  competencyTypes: CompetencyType[];

  constructor(private dropService: DropdownsService) { }

  ngOnInit() {
    this.getCompetencies();
    this.getCompetencyTypes();
  }

  getCompetencies() {
    this.dropService.getCompetencies()
    .subscribe(data => {
      this.competencies = data;
    }, error => {
      console.log('Error binding data to view');
    });
  }

  getCompetencyTypes() {
    this.dropService.getCompetencyTypes()
    .subscribe(data => {
      this.competencyTypes = data;
    }, error => {
      console.log('Error binding data to view');
    });
  }

}
