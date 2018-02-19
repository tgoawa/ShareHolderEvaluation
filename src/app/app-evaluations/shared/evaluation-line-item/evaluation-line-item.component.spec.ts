import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationLineItemComponent } from './evaluation-line-item.component';

describe('EvaluationLineItemComponent', () => {
  let component: EvaluationLineItemComponent;
  let fixture: ComponentFixture<EvaluationLineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationLineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
