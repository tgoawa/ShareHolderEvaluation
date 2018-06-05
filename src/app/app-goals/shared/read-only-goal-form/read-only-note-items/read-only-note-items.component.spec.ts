import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyNoteItemsComponent } from './read-only-note-items.component';

describe('ReadOnlyNoteItemsComponent', () => {
  let component: ReadOnlyNoteItemsComponent;
  let fixture: ComponentFixture<ReadOnlyNoteItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyNoteItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyNoteItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
