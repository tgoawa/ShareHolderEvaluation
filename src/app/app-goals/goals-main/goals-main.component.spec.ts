import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsMainComponent } from './goals-main.component';

describe('GoalsMainComponent', () => {
  let component: GoalsMainComponent;
  let fixture: ComponentFixture<GoalsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
