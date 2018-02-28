import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Note } from '../../../models/note';

@Component({
  selector: 'app-note-items',
  templateUrl: './note-items.component.html',
  styleUrls: ['./note-items.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteItemsComponent implements OnInit, OnChanges{
  @Input() noteItems: FormArray;
  @Input() noteItem: Note;

  noteItemForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.noteItemForm = this.toFormGroup(this.noteItem);
    this.noteItems.push(this.noteItemForm);
  }

  private toFormGroup(data: Note) {
    const formGroup = this.fb.group({
      NoteId: data.NoteID,
      GoalId: data.GoalID,
      Note: data.Note,
      IsDirty: data.IsDirty,
    });

    return formGroup;
  }

  onValueChange() {
    this.noteItemForm.patchValue({
      IsDirty: true
    });
  }

}
