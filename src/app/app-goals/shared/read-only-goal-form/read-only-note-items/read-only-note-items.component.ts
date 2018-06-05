import { Component, OnInit, Input } from '@angular/core';
import { FormArray, FormGroup, FormBuilder } from '@angular/forms';
import { Note } from '../../../models/note';

@Component({
  selector: 'app-read-only-note-items',
  templateUrl: './read-only-note-items.component.html',
  styleUrls: ['./read-only-note-items.component.css']
})
export class ReadOnlyNoteItemsComponent implements OnInit {
  @Input() noteItems: FormArray;
  @Input() noteItem: Note;

  noteItemForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.noteItemForm = this.toFormGroup(this.noteItem);
    this.noteItems.push(this.noteItemForm);
  }


  private toFormGroup(data: Note) {
    const formGroup = this.fb.group({
      NoteId: data.NoteId,
      GoalId: data.GoalId,
      Note: {value: data.Note, disabled: true},
      IsDirty: data.IsDirty,
    });

    return formGroup;
  }
}
