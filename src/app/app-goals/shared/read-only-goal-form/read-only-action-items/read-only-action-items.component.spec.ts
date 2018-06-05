import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyActionItemsComponent } from './read-only-action-items.component';

describe('ReadOnlyActionItemsComponent', () => {
  let component: ReadOnlyActionItemsComponent;
  let fixture: ComponentFixture<ReadOnlyActionItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyActionItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyActionItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
