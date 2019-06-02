import { TestBed } from '@angular/core/testing';

import { UserListingService } from './user-listing.service';

describe('UserListingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserListingService = TestBed.get(UserListingService);
    expect(service).toBeTruthy();
  });
});
