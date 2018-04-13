import { TestBed, inject } from '@angular/core/testing';

import { JanuszeService } from './janusze.service';

describe('JanuszeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JanuszeService]
    });
  });

  it('should be created', inject([JanuszeService], (service: JanuszeService) => {
    expect(service).toBeTruthy();
  }));
});
