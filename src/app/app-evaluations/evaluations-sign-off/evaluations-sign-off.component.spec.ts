import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsSignOffComponent } from './evaluations-sign-off.component';

describe('EvaluationsSignOffComponent', () => {
  let component: EvaluationsSignOffComponent;
  let fixture: ComponentFixture<EvaluationsSignOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationsSignOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationsSignOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
