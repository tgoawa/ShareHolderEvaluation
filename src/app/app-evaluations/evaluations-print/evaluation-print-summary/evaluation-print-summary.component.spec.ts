import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationPrintSummaryComponent } from './evaluation-print-summary.component';

describe('EvaluationPrintSummaryComponent', () => {
  let component: EvaluationPrintSummaryComponent;
  let fixture: ComponentFixture<EvaluationPrintSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationPrintSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationPrintSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
