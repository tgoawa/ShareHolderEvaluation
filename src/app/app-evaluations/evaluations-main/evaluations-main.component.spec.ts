import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationsMainComponent } from './evaluations-main.component';

describe('EvaluationsMainComponent', () => {
  let component: EvaluationsMainComponent;
  let fixture: ComponentFixture<EvaluationsMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvaluationsMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationsMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
