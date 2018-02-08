import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalFormCardComponent } from './goal-form-card.component';

describe('GoalFormCardComponent', () => {
  let component: GoalFormCardComponent;
  let fixture: ComponentFixture<GoalFormCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalFormCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalFormCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
