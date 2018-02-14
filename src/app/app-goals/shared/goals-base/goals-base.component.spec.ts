import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsBaseComponent } from './goals-base.component';

describe('GoalsBaseComponent', () => {
  let component: GoalsBaseComponent;
  let fixture: ComponentFixture<GoalsBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
