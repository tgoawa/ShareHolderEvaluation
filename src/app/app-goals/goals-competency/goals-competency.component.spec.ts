import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsCompetencyComponent } from './goals-competency.component';

describe('GoalsCompetencyComponent', () => {
  let component: GoalsCompetencyComponent;
  let fixture: ComponentFixture<GoalsCompetencyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsCompetencyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsCompetencyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
