import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-action-items',
  templateUrl: './action-items.component.html',
  styleUrls: ['./action-items.component.css']
})
export class ActionItemsComponent implements OnInit {
  @Input() actionItems;
  @Input() actionItem;
  constructor() { }

  ngOnInit() {
  }

}
