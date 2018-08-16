import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationPrintGoalComponent } from './evaluation-print-goal.component';

describe('EvaluationPrintGoalComponent', () => {
  let component: EvaluationPrintGoalComponent;
  let fixture: ComponentFixture<EvaluationPrintGoalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationPrintGoalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationPrintGoalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
