import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsPrintComponent } from './goals-print.component';

describe('GoalsPrintComponent', () => {
  let component: GoalsPrintComponent;
  let fixture: ComponentFixture<GoalsPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
