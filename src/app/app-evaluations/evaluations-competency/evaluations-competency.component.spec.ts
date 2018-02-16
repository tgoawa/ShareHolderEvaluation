import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsCompetencyComponent } from './evaluations-competency.component';

describe('EvaluationsCompetencyComponent', () => {
  let component: EvaluationsCompetencyComponent;
  let fixture: ComponentFixture<EvaluationsCompetencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationsCompetencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationsCompetencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
