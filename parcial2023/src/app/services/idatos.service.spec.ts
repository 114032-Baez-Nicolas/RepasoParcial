import { TestBed } from '@angular/core/testing';

import { IDatosService } from './idatos.service';

describe('IDatosService', () => {
  let service: IDatosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IDatosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
