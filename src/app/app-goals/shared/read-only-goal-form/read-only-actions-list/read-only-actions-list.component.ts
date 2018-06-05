import { Component, OnInit } from '@angular/core';
import { ActionsListComponent } from '../../goal-form-card/actions-list/actions-list.component';

@Component({
  selector: 'app-read-only-actions-list',
  templateUrl: './read-only-actions-list.component.html',
  styleUrls: ['./read-only-actions-list.component.css']
})
export class ReadOnlyActionsListComponent extends ActionsListComponent {

}
