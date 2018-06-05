import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadOnlyWigDropdownsComponent } from './read-only-wig-dropdowns.component';

describe('ReadOnlyWigDropdownsComponent', () => {
  let component: ReadOnlyWigDropdownsComponent;
  let fixture: ComponentFixture<ReadOnlyWigDropdownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadOnlyWigDropdownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadOnlyWigDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
