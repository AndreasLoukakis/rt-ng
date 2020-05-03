import { TestBed } from '@angular/core/testing';

import { ProbservableService } from './probservable.service';

describe('ProbservableService', () => {
  let service: ProbservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProbservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
