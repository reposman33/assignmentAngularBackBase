import { TestBed } from '@angular/core/testing';

import { HttpService } from './weatherApi';

describe('HttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpService = TestBed.get(HttpService);
    expect(service).toBeTruthy();
  });
});
