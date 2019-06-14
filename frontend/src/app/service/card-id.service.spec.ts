import { TestBed } from '@angular/core/testing';

import { CardIDService } from './card-id.service';

describe('CardIDService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardIDService = TestBed.get(CardIDService);
    expect(service).toBeTruthy();
  });
});
