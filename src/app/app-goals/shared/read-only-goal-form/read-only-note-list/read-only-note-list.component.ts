import { Component, OnInit } from '@angular/core';
import { NotesListComponent } from '../../goal-form-card/notes-list/notes-list.component';

@Component({
  selector: 'app-read-only-note-list',
  templateUrl: './read-only-note-list.component.html',
  styleUrls: ['./read-only-note-list.component.css']
})
export class ReadOnlyNoteListComponent extends NotesListComponent {

}
