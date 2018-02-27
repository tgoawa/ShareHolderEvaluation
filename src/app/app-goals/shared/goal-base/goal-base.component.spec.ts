import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalBaseComponent } from './goal-base.component';

describe('GoalBaseComponent', () => {
  let component: GoalBaseComponent;
  let fixture: ComponentFixture<GoalBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
