import { TestBed, inject } from '@angular/core/testing';

import { WordsService } from './words.service';

describe('WordsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WordsService]
    });
  });

  it('should be created', inject([WordsService], (service: WordsService) => {
    expect(service).toBeTruthy();
  }));
});
