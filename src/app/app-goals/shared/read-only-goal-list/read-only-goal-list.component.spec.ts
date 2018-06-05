import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyGoalListComponent } from './read-only-goal-list.component';

describe('ReadOnlyGoalListComponent', () => {
  let component: ReadOnlyGoalListComponent;
  let fixture: ComponentFixture<ReadOnlyGoalListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyGoalListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyGoalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
