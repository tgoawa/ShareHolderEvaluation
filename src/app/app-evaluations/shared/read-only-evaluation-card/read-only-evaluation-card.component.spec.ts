import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyEvaluationCardComponent } from './read-only-evaluation-card.component';

describe('ReadOnlyEvaluationCardComponent', () => {
  let component: ReadOnlyEvaluationCardComponent;
  let fixture: ComponentFixture<ReadOnlyEvaluationCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyEvaluationCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyEvaluationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
