import { TestBed } from '@angular/core/testing';

import { ReqresApiService } from './reqres-api.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('ReqresApiService', () => {
  let service: ReqresApiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get', 'post']);
    service = TestBed.inject(ReqresApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
