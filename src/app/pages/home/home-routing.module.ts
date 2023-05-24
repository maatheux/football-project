import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SearchCountryComponent } from '@features/country/components/search-country/search-country.component';

const routes: Routes = [
  {
    path: '',
    component: SearchCountryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
