import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsPrintComponent } from './evaluations-print.component';

describe('EvaluationsPrintComponent', () => {
  let component: EvaluationsPrintComponent;
  let fixture: ComponentFixture<EvaluationsPrintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationsPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationsPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
