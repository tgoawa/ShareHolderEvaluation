import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationPrintGoalTypeComponent } from './evaluation-print-goal-type.component';

describe('EvaluationPrintGoalTypeComponent', () => {
  let component: EvaluationPrintGoalTypeComponent;
  let fixture: ComponentFixture<EvaluationPrintGoalTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationPrintGoalTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationPrintGoalTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
