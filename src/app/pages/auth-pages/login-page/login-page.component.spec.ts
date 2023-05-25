import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginPageComponent } from './login-page.component';
import { GetApiStatusService } from '@core/services/get-api-status.service';
import { NgxCookieService } from '@core/services/ngx-cookie.service';
import { of, throwError } from 'rxjs';
import { EApiStatus } from '@core/enum/EApiStatus.enum';
import { Router } from '@angular/router';
import { environment } from '@environment/environment';

describe('LoginPageComponent', () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;
  let apiStatusService: jasmine.SpyObj<GetApiStatusService>;
  let cookieService: jasmine.SpyObj<NgxCookieService>;
  let router: any;

  beforeEach(() => {
    const apiStatusServiceSpy = jasmine.createSpyObj('GetApiStatusService', ['GetApiStatus']);
    const cookieServiceSpy = jasmine.createSpyObj('NgxCookieService', ['SaveKey']);
    const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [LoginPageComponent],
      providers: [
        { provide: GetApiStatusService, useValue: apiStatusServiceSpy },
        { provide: NgxCookieService, useValue: cookieServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    apiStatusService = TestBed.inject(GetApiStatusService) as jasmine.SpyObj<GetApiStatusService>;
    cookieService = TestBed.inject(NgxCookieService) as jasmine.SpyObj<NgxCookieService>;
    router = TestBed.inject(Router);
  });

  it('should save the key and navigate to the home page if the API status is valid', () => {
    const key = environment.API_KEY;
    const apiStatus = EApiStatus.IsValid;

    apiStatusService.GetApiStatus.and.returnValue(of(apiStatus));

    component.userKey = key;
    component.SendKey(key);

    expect(cookieService.SaveKey).toHaveBeenCalledWith(key);
    expect(router.navigateByUrl).toHaveBeenCalledWith('/');
  });

  it('should not save the key and not navigate if the API status is not valid', () => {
    const key = environment.API_KEY;
    const apiStatus = EApiStatus.NotValid;

    apiStatusService.GetApiStatus.and.returnValue(of(apiStatus));

    component.userKey = key;
    component.SendKey(key);

    expect(cookieService.SaveKey).not.toHaveBeenCalled();
    expect(router.navigateByUrl).not.toHaveBeenCalled();
  });

  it('should handle error when API status request fails', () => {
    const key = environment.API_KEY;
    const error = new Error('API status request failed');

    apiStatusService.GetApiStatus.and.returnValue(throwError(error));

    component.userKey = key;
    component.SendKey(key);

    expect(cookieService.SaveKey).not.toHaveBeenCalled();
    expect(router.navigateByUrl).not.toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(error);
  });

  /* it('should navigate to the sign-up page', () => {
    component.GoToSignUp();

    expect(router.navigateByUrl).toHaveBeenCalledWith('auth/sign-up');
  }); */

});
