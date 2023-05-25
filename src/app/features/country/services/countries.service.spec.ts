import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CountriesService } from './countries.service';
import { NgxCookieService } from '@core/services/ngx-cookie.service';
import { ApiResponse } from '@core/interfaces/api-response.interface';
import { CountriesResponse } from '../interfaces/countries-response.interface';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';

describe('CountriesService', () => {
  let service: CountriesService;
  let httpMock: HttpTestingController;
  let cookieService: NgxCookieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountriesService, NgxCookieService],
    });

    service = TestBed.inject(CountriesService);
    httpMock = TestBed.inject(HttpTestingController);
    cookieService = TestBed.inject(NgxCookieService);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve all countries', () => {
    const API_KEY = environment.API_KEY;
    const countriesResponse: CountriesResponse[] = [];

    spyOn(cookieService, 'StoredKeyIsValid').and.returnValue(true);
    spyOn(cookieService, 'GetKey').and.returnValue(API_KEY);

    service.GetAllCountries().subscribe((response: CountriesResponse[]) => {
      expect(response).toEqual(countriesResponse);
    });

    const req = httpMock.expectOne(`${environment.API_URL}/countries`);
    expect(req.request.headers.get('X-RapidAPI-Key')).toBe(API_KEY);
    expect(req.request.method).toBe('GET');
    req.flush({ response: countriesResponse });
  });

  it('should return an empty observable when the stored key is invalid', () => {
    spyOn(cookieService, 'StoredKeyIsValid').and.returnValue(false);

    service.GetAllCountries().subscribe((response: CountriesResponse[]) => {
      expect(response).toEqual([]);
    });

    httpMock.expectNone(`${environment.API_URL}/countries`);
  });

});
