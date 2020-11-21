import { TestBed } from '@angular/core/testing';

import { UserDataRenderService } from './user-data-render.service';

describe('UserDataRenderService', () => {
  let service: UserDataRenderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDataRenderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
