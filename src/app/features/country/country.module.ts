import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCountryComponent } from './components/search-country/search-country.component';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchCountryComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
  ],
  exports: [
    SearchCountryComponent,
  ]
})
export class CountryModule { }
