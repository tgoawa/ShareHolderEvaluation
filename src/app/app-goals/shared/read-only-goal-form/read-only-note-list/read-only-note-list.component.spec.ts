import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyNoteListComponent } from './read-only-note-list.component';

describe('ReadOnlyNoteListComponent', () => {
  let component: ReadOnlyNoteListComponent;
  let fixture: ComponentFixture<ReadOnlyNoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyNoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyNoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
