import { TestBed } from '@angular/core/testing';

import { PicTalkService } from './pic-talk.service';

describe('PicTalkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PicTalkService = TestBed.get(PicTalkService);
    expect(service).toBeTruthy();
  });
});
