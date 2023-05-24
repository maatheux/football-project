import { Injectable } from '@angular/core';
import { CookieStatusResponse } from '@core/interfaces/cookie-status-response.interface';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class NgxCookieService {

  constructor(private cookieService: CookieService) { }

  public SaveKey(key: string): CookieStatusResponse {
    const deadline = new Date();
    const durationInMinutes = 60;

    deadline.setTime(deadline.getTime() + durationInMinutes * 1000)

    this.cookieService.set("key", key, deadline, "/");

    if (this.GetKey()) {
      return {
        status: 'Success',
      }
    } else {
      return {
        status: 'Error',
      }
    }
  }

  public GetKey() {
    return this.cookieService.get("key");
  }
}
