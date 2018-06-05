import { Component, OnInit } from '@angular/core';
import { ActionItemsComponent } from '../../goal-form-card/action-items/action-items.component';

@Component({
  selector: 'app-read-only-action-items',
  templateUrl: './read-only-action-items.component.html',
  styleUrls: ['./read-only-action-items.component.css']
})
export class ReadOnlyActionItemsComponent extends ActionItemsComponent {

}
