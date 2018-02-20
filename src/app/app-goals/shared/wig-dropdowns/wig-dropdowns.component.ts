import { Component, OnInit, Input } from '@angular/core';
import { DropdownsService, WIG } from '../services/dropdowns.service';

@Component({
  selector: 'app-wig-dropdowns',
  templateUrl: './wig-dropdowns.component.html',
  styleUrls: ['./wig-dropdowns.component.css']
})
export class WigDropdownsComponent implements OnInit {
  @Input() parentForm;
  WIGS: WIG[];

  constructor(private dropService: DropdownsService) { }

  ngOnInit() {
    this.getWigs();
  }

  getWigs() {
    this.dropService.getWIGs()
    .subscribe(data => {
      this.WIGS = data;
    }, error => {
      console.log('Could not bind wig dropdown to view');
    });
  }

}
