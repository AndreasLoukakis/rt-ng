import { TestBed } from '@angular/core/testing';

import { InTransitInterceptor } from './in-transit.interceptor';

describe('InTransitInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InTransitInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InTransitInterceptor = TestBed.inject(InTransitInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
