import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicGoalCardComponent } from './economic-goal-card.component';

describe('EconomicGoalCardComponent', () => {
  let component: EconomicGoalCardComponent;
  let fixture: ComponentFixture<EconomicGoalCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicGoalCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicGoalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
