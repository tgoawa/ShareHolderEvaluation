import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyEconomicGoalCardComponent } from './read-only-economic-goal-card.component';

describe('ReadOnlyEconomicGoalCardComponent', () => {
  let component: ReadOnlyEconomicGoalCardComponent;
  let fixture: ComponentFixture<ReadOnlyEconomicGoalCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyEconomicGoalCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyEconomicGoalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
