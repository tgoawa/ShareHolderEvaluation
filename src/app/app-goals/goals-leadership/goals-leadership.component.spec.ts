import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsLeadershipComponent } from './goals-leadership.component';

describe('GoalsLeadershipComponent', () => {
  let component: GoalsLeadershipComponent;
  let fixture: ComponentFixture<GoalsLeadershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsLeadershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
