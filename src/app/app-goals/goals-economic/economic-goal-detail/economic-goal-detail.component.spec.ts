import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicGoalDetailComponent } from './economic-goal-detail.component';

describe('EconomicGoalDetailComponent', () => {
  let component: EconomicGoalDetailComponent;
  let fixture: ComponentFixture<EconomicGoalDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicGoalDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicGoalDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
