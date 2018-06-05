import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyActionsListComponent } from './read-only-actions-list.component';

describe('ReadOnlyActionsListComponent', () => {
  let component: ReadOnlyActionsListComponent;
  let fixture: ComponentFixture<ReadOnlyActionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyActionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyActionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
