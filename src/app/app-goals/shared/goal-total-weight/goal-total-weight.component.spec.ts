import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalTotalWeightComponent } from './goal-total-weight.component';

describe('GoalTotalWeightComponent', () => {
  let component: GoalTotalWeightComponent;
  let fixture: ComponentFixture<GoalTotalWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalTotalWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalTotalWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
