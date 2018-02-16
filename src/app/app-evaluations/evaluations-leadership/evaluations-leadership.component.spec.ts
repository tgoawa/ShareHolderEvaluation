import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsLeadershipComponent } from './evaluations-leadership.component';

describe('EvaluationsLeadershipComponent', () => {
  let component: EvaluationsLeadershipComponent;
  let fixture: ComponentFixture<EvaluationsLeadershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationsLeadershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationsLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
