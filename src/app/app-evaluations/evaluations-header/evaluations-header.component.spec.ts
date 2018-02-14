import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsHeaderComponent } from './evaluations-header.component';

describe('EvaluationsHeaderComponent', () => {
  let component: EvaluationsHeaderComponent;
  let fixture: ComponentFixture<EvaluationsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
