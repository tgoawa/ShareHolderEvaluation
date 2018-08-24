import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsPrintTypeComponent } from './goals-print-type.component';

describe('GoalsPrintTypeComponent', () => {
  let component: GoalsPrintTypeComponent;
  let fixture: ComponentFixture<GoalsPrintTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsPrintTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsPrintTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
