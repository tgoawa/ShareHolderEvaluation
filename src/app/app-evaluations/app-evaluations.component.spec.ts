import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppEvaluationsComponent } from './app-evaluations.component';

describe('AppEvaluationsComponent', () => {
  let component: AppEvaluationsComponent;
  let fixture: ComponentFixture<AppEvaluationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppEvaluationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppEvaluationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
