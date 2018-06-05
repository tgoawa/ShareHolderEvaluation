import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyGoalFormComponent } from './read-only-goal-form.component';

describe('ReadOnlyGoalFormComponent', () => {
  let component: ReadOnlyGoalFormComponent;
  let fixture: ComponentFixture<ReadOnlyGoalFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyGoalFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyGoalFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
