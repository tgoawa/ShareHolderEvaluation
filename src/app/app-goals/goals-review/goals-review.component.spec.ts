import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsReviewComponent } from './goals-review.component';

describe('GoalsReviewComponent', () => {
  let component: GoalsReviewComponent;
  let fixture: ComponentFixture<GoalsReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
