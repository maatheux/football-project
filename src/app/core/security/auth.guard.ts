import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { NgxCookieService } from '@core/services/ngx-cookie.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor(
    private cookieService: NgxCookieService,
    private route: Router,
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (!this.cookieService.StoredKeyIsValid()) {
      this.route.navigate(['/auth']);
      return false;
    }

    return true;
  }
}
