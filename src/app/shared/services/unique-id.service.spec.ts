import { TestBed } from '@angular/core/testing';

import { UniqueId } from './unique-id';

describe('UniqueId', () => {
  let service: UniqueId;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniqueId);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
