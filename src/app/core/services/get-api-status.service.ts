import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, tap } from 'rxjs';
import { ApiResponse } from '../interfaces/api-response.interface';
import { environment } from '@environment/environment';
import { EApiStatus } from '@core/enum/EApiStatus.enum';

@Injectable({providedIn: 'root'})

export class GetApiStatusService {

  private apiUrl = environment.API_URL;

  constructor(private httpClient: HttpClient) { }

  GetApiStatus(API_KEY: string): Observable<number> {
    return this.httpClient.get<ApiResponse>(`${this.apiUrl}/status`, {
      headers: {
        "X-RapidAPI-Key": API_KEY
      }
    })
    .pipe(
      map(res => res.results),
    )
  }

  ApiKeyIsValid(API_KEY: string): Observable<boolean> {
    return this.httpClient.get<ApiResponse>(`${this.apiUrl}/status`, {
      headers: {
        "X-RapidAPI-Key": API_KEY
      }
    })
    .pipe(
      map(res => res.results !== EApiStatus.NotValid),
    )
  }

}
