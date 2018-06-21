import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalDescriptionDialogComponent } from './goal-description-dialog.component';

describe('GoalDescriptionDialogComponent', () => {
  let component: GoalDescriptionDialogComponent;
  let fixture: ComponentFixture<GoalDescriptionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalDescriptionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalDescriptionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
