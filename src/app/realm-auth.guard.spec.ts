import { TestBed } from '@angular/core/testing';

import { RealmAuthGuard } from './realm-auth.guard';

describe('RealmAuthGuard', () => {
  let guard: RealmAuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RealmAuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
