import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EApiStatus } from '@core/enum/EApiStatus.enum';
import { GetApiStatusService } from '@core/services/get-api-status.service';
import { NgxCookieService } from '@core/services/ngx-cookie.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  public userKey: string = "";

  constructor(
    private router: Router,
    private apiStatusService: GetApiStatusService,
    private cookieService: NgxCookieService,
  ) { }

  ngOnInit(): void {
  }

  public SendKey(key?: string) {
    if (key) this.apiStatusService.GetApiStatus(key).subscribe({
      next: (res) => {

        if (res !== EApiStatus.NotValid) {
          this.cookieService.SaveKey(this.userKey);
          this.router.navigate(['/'])
        }
      },
      error: (err) => console.error(err),


    })

  }

  public GoToSignUp() {
    this.router.navigateByUrl('auth/sign-up');
  }

}
