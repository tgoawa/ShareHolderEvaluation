import { Component, OnInit } from '@angular/core';
import { NoteItemsComponent } from '../../goal-form-card/note-items/note-items.component';

@Component({
  selector: 'app-read-only-note-items',
  templateUrl: './read-only-note-items.component.html',
  styleUrls: ['./read-only-note-items.component.css']
})
export class ReadOnlyNoteItemsComponent extends NoteItemsComponent {

}
