import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyMainCardComponent } from './read-only-main-card.component';

describe('ReadOnlyMainCardComponent', () => {
  let component: ReadOnlyMainCardComponent;
  let fixture: ComponentFixture<ReadOnlyMainCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyMainCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyMainCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
