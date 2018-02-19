import { TestBed, inject } from '@angular/core/testing';

import { DropdownsService } from './dropdowns.service';

describe('DropdownsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DropdownsService]
    });
  });

  it('should be created', inject([DropdownsService], (service: DropdownsService) => {
    expect(service).toBeTruthy();
  }));
});
