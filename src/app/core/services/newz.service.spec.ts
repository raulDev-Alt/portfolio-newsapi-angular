import { TestBed } from '@angular/core/testing';

import { NewzService } from './newz.service';

describe('NewzService', () => {
  let service: NewzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
