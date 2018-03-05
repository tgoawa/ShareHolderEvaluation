import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicCardComponent } from './economic-card.component';

describe('EconomicCardComponent', () => {
  let component: EconomicCardComponent;
  let fixture: ComponentFixture<EconomicCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EconomicCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EconomicCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
