import { TestBed } from '@angular/core/testing';

import { HttpComunicationsService } from './http-comunications.service';

describe('HttpComunicationsService', () => {
  let service: HttpComunicationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpComunicationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
