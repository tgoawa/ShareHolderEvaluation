import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationPrintSummaryGoalTypesComponent } from './evaluation-print-summary-goal-types.component';

describe('EvaluationPrintSummaryGoalTypesComponent', () => {
  let component: EvaluationPrintSummaryGoalTypesComponent;
  let fixture: ComponentFixture<EvaluationPrintSummaryGoalTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationPrintSummaryGoalTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationPrintSummaryGoalTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
