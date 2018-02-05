import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppGoalsComponent } from './app-goals.component';

describe('AppGoalsComponent', () => {
  let component: AppGoalsComponent;
  let fixture: ComponentFixture<AppGoalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppGoalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
