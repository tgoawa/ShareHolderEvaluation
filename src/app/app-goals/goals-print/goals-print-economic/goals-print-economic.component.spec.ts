import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsPrintEconomicComponent } from './goals-print-economic.component';

describe('GoalsPrintEconomicComponent', () => {
  let component: GoalsPrintEconomicComponent;
  let fixture: ComponentFixture<GoalsPrintEconomicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsPrintEconomicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsPrintEconomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
