import { TestBed } from '@angular/core/testing';

import { MenuActionService } from './menu-action.service';

describe('MenuActionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MenuActionService = TestBed.get(MenuActionService);
    expect(service).toBeTruthy();
  });
});
