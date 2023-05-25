import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@core/interfaces/api-response.interface';
import { NgxCookieService } from '@core/services/ngx-cookie.service';
import { environment } from '@environment/environment';
import { Observable, map } from 'rxjs';
import { LeaguesResponse } from '../interfaces/leagues-response.interface';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LeaguesService {

  private apiUrl = environment.API_URL;

  constructor(
    private httpClient: HttpClient,
    private cookieService: NgxCookieService,
    private route: Router
  ) { }

  public GetAllLeagues(country: string): Observable<LeaguesResponse[]> {
    if (this.cookieService.StoredKeyIsValid()) {
      const API_KEY = this.cookieService.GetKey();

      return this.httpClient.get<ApiResponse>(`${this.apiUrl}/leagues`, {
        headers: {
          "X-RapidAPI-Key": API_KEY
        },
        params: {
          country: country,
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
