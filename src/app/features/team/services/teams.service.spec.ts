import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TeamsService } from './teams.service';
import { NgxCookieService } from '@core/services/ngx-cookie.service';
import { Router } from '@angular/router';
import { ApiResponse } from '@core/interfaces/api-response.interface';
import { TeamsResponse } from '../interfaces/teams-response.interface';
import { TeamStatistics } from '../interfaces/team-statistics.interface';
import { Observable } from 'rxjs';
import { environment } from '@environment/environment';

describe('TeamsService', () => {
  let service: TeamsService;
  let httpMock: HttpTestingController;
  let cookieService: NgxCookieService;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [TeamsService, NgxCookieService],
    });

    service = TestBed.inject(TeamsService);
    httpMock = TestBed.inject(HttpTestingController);
    cookieService = TestBed.inject(NgxCookieService);
    router = TestBed.inject(Router);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve all teams', () => {
    const leagueId = 39;
    const season = 2023;
    const API_KEY = environment.API_KEY;
    const teamsResponse: TeamsResponse[] = [];

    spyOn(cookieService, 'StoredKeyIsValid').and.returnValue(true);
    spyOn(cookieService, 'GetKey').and.returnValue(API_KEY);

    service.GetAllTeams(leagueId, season).subscribe((response: TeamsResponse[]) => {
      expect(response).toEqual(teamsResponse);
    });

    const req = httpMock.expectOne(`${environment.API_URL}/teams?league=${leagueId}&season=${season}`);
    expect(req.request.headers.get('X-RapidAPI-Key')).toBe(API_KEY);
    expect(req.request.method).toBe('GET');
    req.flush({ response: teamsResponse });
  });

  it('should navigate to auth page when the stored key is invalid', () => {
    spyOn(cookieService, 'StoredKeyIsValid').and.returnValue(false);
    spyOn(router, 'navigate');

    service.GetAllTeams(39, 2023).subscribe(() => {
      fail('The request should not be successful');
    });

    expect(router.navigate).toHaveBeenCalledWith(['/auth']);
  });

});
