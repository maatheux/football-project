import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@core/interfaces/api-response.interface';
import { NgxCookieService } from '@core/services/ngx-cookie.service';
import { environment } from '@environment/environment';
import { Observable, map } from 'rxjs';
import { TeamsResponse } from '../interfaces/teams-response.interface';
import { TeamStatistics } from '../interfaces/team-statistics.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private apiUrl = environment.API_URL;

  constructor(
    private httpClient: HttpClient,
    private cookieService: NgxCookieService,
    private route: Router
  ) { }

  public GetAllTeams(leagueId: number, season: number): Observable<TeamsResponse[]> {
    if (this.cookieService.StoredKeyIsValid()) {
      const API_KEY = this.cookieService.GetKey();

      return this.httpClient.get<ApiResponse>(`${this.apiUrl}/teams`, {
        headers: {
          "X-RapidAPI-Key": API_KEY
        },
        params: {
          league: leagueId,
          season: season,
        }
      })
      .pipe(
        map(res => res.response),
      )
    }

    this.route.navigate(['/auth']);
    return new Observable();
  }

  public GetPlayers(leagueId: number, season: number, teamId: number, page: number): Observable<ApiResponse> {
    if (this.cookieService.StoredKeyIsValid()) {
      const API_KEY = this.cookieService.GetKey();

      return this.httpClient.get<ApiResponse>(`${this.apiUrl}/players`, {
        headers: {
          "X-RapidAPI-Key": API_KEY
        },
        params: {
          league: leagueId,
          season: season,
          team: teamId,
          page: page,
        }
      })
    }

    this.route.navigate(['/auth']);
    return new Observable();
  }

  public GetTeamStatistics(leagueId: number, season: number, teamId: number): Observable<TeamStatistics> {
    if (this.cookieService.StoredKeyIsValid()) {
      const API_KEY = this.cookieService.GetKey();

      return this.httpClient.get<ApiResponse>(`${this.apiUrl}/teams/statistics`, {
        headers: {
          "X-RapidAPI-Key": API_KEY
        },
        params: {
          league: leagueId,
          season: season,
          team: teamId,
        }
      })
      .pipe(
        map(res => res.response),
      )
    }

    this.route.navigate(['/auth']);
    return new Observable();
  }
}
