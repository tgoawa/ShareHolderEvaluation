import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsEconomicComponent } from './goals-economic.component';

describe('GoalsEconomicComponent', () => {
  let component: GoalsEconomicComponent;
  let fixture: ComponentFixture<GoalsEconomicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsEconomicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsEconomicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
