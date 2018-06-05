import { Component } from '@angular/core';
import { MainCardComponent } from '../main-card/main-card.component';

@Component({
  selector: 'app-read-only-main-card',
  templateUrl: './read-only-main-card.component.html',
  styleUrls: ['./read-only-main-card.component.css']
})
export class ReadOnlyMainCardComponent extends MainCardComponent {

}
