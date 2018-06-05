import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyEconomicCardComponent } from './read-only-economic-card.component';

describe('ReadOnlyEconomicCardComponent', () => {
  let component: ReadOnlyEconomicCardComponent;
  let fixture: ComponentFixture<ReadOnlyEconomicCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyEconomicCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyEconomicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
