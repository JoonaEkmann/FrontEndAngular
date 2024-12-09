import { TestBed } from '@angular/core/testing';

import { FinnkinoService } from './finnkino.service';

describe('FinnkinoService', () => {
  let service: FinnkinoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinnkinoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
