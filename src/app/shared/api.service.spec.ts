import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });
    apiService = TestBed.inject(ApiService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it(`should get(GET) the data successful`, () => {
    apiService.getSingle(1).subscribe((data: any) => {
      expect(data.name).toEqual('Leonard Walsh');
    });
    const req = httpMock.expectOne('https://api.jsonapi.co/rest/v1/user/1', 'Call to api');
    expect(req.request.method).toBe('GET');

    req.flush({name: 'Leonard Walsh'});
    httpMock.verify();
  });

  it(`should pass(POST) the correct data`, () => {
    apiService.post({ 
      "email": "abc@gmail.com",
      "password":"password"
    }).subscribe( (data: any) => {
        expect(data.token).toEqual('12ccf1b8-f6da-4c68-bb64-fc72ebb94094');
    });

    const req = httpMock.expectOne(`https://api.jsonapi.co/rest/v1/user/login`, `Post to api`);
    expect(req.request.method).toBe('POST');

    req.flush({token : '12ccf1b8-f6da-4c68-bb64-fc72ebb94094'});
    httpMock.verify();
  });

  it(`should update(PUT) the user`, () => {

    apiService.put(1, {'user': 'data'}).subscribe((data: any) => {
      expect(data.id).toEqual('create');
    });

    const req = httpMock.expectOne(`https://api.jsonapi.co/rest/v1/user/create`, 'Put to Api');
    expect(req.request.method).toBe('PUT');

    req.flush({id: 'create'});
    httpMock.verify();
  })

  it(`should remove (DELETE) the user`, ()=> {
    apiService.delete(1).subscribe((data: any) => {
      expect(data.data).toEqual('No Content');
    });
    const req = httpMock.expectOne(`https://api.jsonapi.co/rest/v1/user/1`, `DELETE to API`);
    expect(req.request.method).toBe('DELETE');

    req.flush({'data': 'No Content'});
    httpMock.verify();
  });
  
});
