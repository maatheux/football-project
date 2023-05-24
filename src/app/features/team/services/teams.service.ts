import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@core/interfaces/api-response.interface';
import { NgxCookieService } from '@core/services/ngx-cookie.service';
import { environment } from '@environment/environment';
import { Observable, map } from 'rxjs';
import { TeamsResponse } from '../interfaces/teams-response.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private apiUrl = environment.API_URL;

  constructor(
    private httpClient: HttpClient,
    private cookieService: NgxCookieService
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

    return new Observable();
  }
}
