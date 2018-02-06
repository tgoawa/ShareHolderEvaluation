import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsWigComponent } from './goals-wig.component';

describe('GoalsWigComponent', () => {
  let component: GoalsWigComponent;
  let fixture: ComponentFixture<GoalsWigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoalsWigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalsWigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
