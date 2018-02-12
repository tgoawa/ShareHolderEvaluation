import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-wig-dropdowns',
  templateUrl: './wig-dropdowns.component.html',
  styleUrls: ['./wig-dropdowns.component.css']
})
export class WigDropdownsComponent implements OnInit {
  @Input() parentForm;
  constructor() { }

  ngOnInit() {
  }

}
