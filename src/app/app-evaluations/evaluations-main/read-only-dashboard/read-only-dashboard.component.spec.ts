import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyDashboardComponent } from './read-only-dashboard.component';

describe('ReadOnlyDashboardComponent', () => {
  let component: ReadOnlyDashboardComponent;
  let fixture: ComponentFixture<ReadOnlyDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
