import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EApiStatus } from '@core/enum/EApiStatus.enum';
import { GetApiStatusService } from '@core/services/get-api-status.service';
import { NgxCookieService } from '@core/services/ngx-cookie.service';
import { LoadingService } from '@shared/services/loading.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  providers: [MessageService],
})
export class LoginPageComponent implements OnInit {

  public userKey: string = "";

  constructor(
    private router: Router,
    private apiStatusService: GetApiStatusService,
    private cookieService: NgxCookieService,
    private loadingService: LoadingService,
    private messageService: MessageService,
  ) { }

  ngOnInit(): void {
  }

  public SendKey(key?: string) {
    this.loadingService.activate();
    if (key) this.apiStatusService.ApiKeyIsValid(key).subscribe({
      next: (res) => {

        if (res) {
          this.cookieService.SaveKey(this.userKey);
          this.router.navigate(['/'])
        } else {
          this.messageService.add({
            severity:'error',
            summary: 'Chave inválida',
            detail: 'Não foi possível acessar pois a chave inserida é inválida',
            key: 'keyResponse',
            life: 6000,
          })
        }
      },
      error: (err) => console.log(err),
      complete: () => {
        this.loadingService.deactivate();
      },

    })

  }

  public GoToSignUp() {
    this.router.navigateByUrl('auth/sign-up');
  }

}
