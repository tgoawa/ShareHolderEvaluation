import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsPrintEconomicDetailComponent } from './goals-print-economic-detail.component';

describe('GoalsPrintEconomicDetailComponent', () => {
  let component: GoalsPrintEconomicDetailComponent;
  let fixture: ComponentFixture<GoalsPrintEconomicDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsPrintEconomicDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsPrintEconomicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
