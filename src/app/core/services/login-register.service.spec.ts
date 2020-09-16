import { TestBed } from '@angular/core/testing';

import { loginRegisterService } from './login-register.service';

describe('LoginRegisterService', () => {
  let service: loginRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(loginRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
