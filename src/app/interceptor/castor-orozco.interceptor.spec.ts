import { TestBed } from '@angular/core/testing';

import { CastorOrozcoInterceptor } from './castor-orozco.interceptor';

describe('CastorOrozcoInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CastorOrozcoInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CastorOrozcoInterceptor = TestBed.inject(CastorOrozcoInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
