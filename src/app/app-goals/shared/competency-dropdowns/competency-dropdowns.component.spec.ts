import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetencyDropdownsComponent } from './competency-dropdowns.component';

describe('CompetencyDropdownsComponent', () => {
  let component: CompetencyDropdownsComponent;
  let fixture: ComponentFixture<CompetencyDropdownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetencyDropdownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetencyDropdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
