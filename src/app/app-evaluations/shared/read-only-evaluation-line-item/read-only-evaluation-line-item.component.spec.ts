import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyEvaluationLineItemComponent } from './read-only-evaluation-line-item.component';

describe('ReadOnlyEvaluationLineItemComponent', () => {
  let component: ReadOnlyEvaluationLineItemComponent;
  let fixture: ComponentFixture<ReadOnlyEvaluationLineItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyEvaluationLineItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyEvaluationLineItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
