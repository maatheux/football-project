import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  constructor(private ngxSpinner: NgxSpinnerService) { }

  activate() {
    this.ngxSpinner.show();
  }

  deactivate() {
    this.ngxSpinner.hide();
  }

}
