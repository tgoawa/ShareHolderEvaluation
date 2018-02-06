import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalListCardComponent } from './goal-list-card.component';

describe('GoalListCardComponent', () => {
  let component: GoalListCardComponent;
  let fixture: ComponentFixture<GoalListCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalListCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalListCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
