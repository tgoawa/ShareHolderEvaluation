import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Note } from '../../../models/note';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotesListComponent implements OnInit, OnChanges {
  @Input() parentForm: FormGroup;
  @Input() Notes: Note[];
  @Input() goalId: number;

  note: Note;
  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit() {}

  ngOnChanges() {
    this.parentForm.addControl('Notes', new FormArray([]));
    this.note = this.setNote();
  }

  setNote() {
    let note = new Note(this.goalId);
    if (this.Notes.length > 0) {
      note = this.Notes[0];
      return note;
    } else {
      return note;
    }
  }
}
