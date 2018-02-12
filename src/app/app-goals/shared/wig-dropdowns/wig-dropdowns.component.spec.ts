import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WigDropdownsComponent } from './wig-dropdowns.component';

describe('WigDropdownsComponent', () => {
  let component: WigDropdownsComponent;
  let fixture: ComponentFixture<WigDropdownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WigDropdownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WigDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
