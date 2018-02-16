import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsEconomicComponent } from './evaluations-economic.component';

describe('EvaluationsEconomicComponent', () => {
  let component: EvaluationsEconomicComponent;
  let fixture: ComponentFixture<EvaluationsEconomicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationsEconomicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationsEconomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
