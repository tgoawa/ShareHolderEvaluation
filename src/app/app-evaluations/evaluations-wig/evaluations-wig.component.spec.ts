import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsWigComponent } from './evaluations-wig.component';

describe('EvaluationsWigComponent', () => {
  let component: EvaluationsWigComponent;
  let fixture: ComponentFixture<EvaluationsWigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationsWigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationsWigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
