import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsPrintGoalComponent } from './goals-print-goal.component';

describe('GoalsPrintGoalComponent', () => {
  let component: GoalsPrintGoalComponent;
  let fixture: ComponentFixture<GoalsPrintGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsPrintGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsPrintGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
