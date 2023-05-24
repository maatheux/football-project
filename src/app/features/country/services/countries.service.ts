import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from '@core/interfaces/api-response.interface';
import { NgxCookieService } from '@core/services/ngx-cookie.service';
import { environment } from '@environment/environment';
import { Observable, map } from 'rxjs';
import { CountriesResponse } from '../interfaces/countries-response.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl = environment.API_URL;

  constructor(
    private httpClient: HttpClient,
    private cookieService: NgxCookieService
  ) { }

  public GetAllCountries(): Observable<CountriesResponse[]> {

    if (this.cookieService.StoredKeyIsValid()) {
      const API_KEY = this.cookieService.GetKey();

      return this.httpClient.get<ApiResponse>(`${this.apiUrl}/countries`, {
        headers: {
          "X-RapidAPI-Key": API_KEY
        }
      })
      .pipe(
        map(res => res.response),
      )
    }

    return new Observable();


  }
}
