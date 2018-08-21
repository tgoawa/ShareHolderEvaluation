import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsPrintEconomicComponent } from './evaluations-print-economic.component';

describe('EvaluationsPrintEconomicComponent', () => {
  let component: EvaluationsPrintEconomicComponent;
  let fixture: ComponentFixture<EvaluationsPrintEconomicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationsPrintEconomicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationsPrintEconomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
