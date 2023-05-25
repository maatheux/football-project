import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LeaguesService } from './leagues.service';
import { NgxCookieService } from '@core/services/ngx-cookie.service';
import { Router } from '@angular/router';
import { ApiResponse } from '@core/interfaces/api-response.interface';
import { LeaguesResponse } from '../interfaces/leagues-response.interface';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';

describe('LeaguesService', () => {
  let service: LeaguesService;
  let httpMock: HttpTestingController;
  let cookieService: NgxCookieService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [LeaguesService, NgxCookieService],
    });

    service = TestBed.inject(LeaguesService);
    httpMock = TestBed.inject(HttpTestingController);
    cookieService = TestBed.inject(NgxCookieService);
    router = TestBed.inject(Router);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve all leagues', () => {
    const country = 'your-country';
    const API_KEY = environment.API_KEY;
    const leaguesResponse: LeaguesResponse[] = [];

    spyOn(cookieService, 'StoredKeyIsValid').and.returnValue(true);
    spyOn(cookieService, 'GetKey').and.returnValue(API_KEY);

    service.GetAllLeagues(country).subscribe((response: LeaguesResponse[]) => {
      expect(response).toEqual(leaguesResponse);
    });

    const req = httpMock.expectOne(`${environment.API_URL}/leagues?country=${country}`);
    expect(req.request.headers.get('X-RapidAPI-Key')).toBe(API_KEY);
    expect(req.request.method).toBe('GET');
    req.flush({ response: leaguesResponse });
  });

  it('should navigate to auth page when the stored key is invalid', () => {
    spyOn(cookieService, 'StoredKeyIsValid').and.returnValue(false);
    spyOn(router, 'navigate');

    service.GetAllLeagues('your-country').subscribe(() => {
      fail('The request should not be successful');
    });

    expect(router.navigate).toHaveBeenCalledWith(['/auth']);
  });

});
