import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CountriesResponse } from '@features/country/interfaces/countries-response.interface';
import { CountriesService } from '@features/country/services/countries.service';
import { LoadingService } from '@shared/services/loading.service';

@Component({
  selector: 'app-search-country',
  templateUrl: './search-country.component.html',
  styleUrls: ['./search-country.component.scss']
})
export class SearchCountryComponent implements OnInit {

  public countries: CountriesResponse[] = []
  public selectedCountry = "";

  constructor(
    private countriesService: CountriesService,
    private route: Router,
    private loadingService: LoadingService,
  ) { }

  ngOnInit(): void {
    this.countriesService.GetAllCountries().subscribe({
      next: (res) => {
        this.countries = [...res];
      }
    })
  }

  public SelectCountry(event: any) {
    this.loadingService.activate();
    const countryDetails: CountriesResponse = event.value;

    setTimeout(() => {
      this.route.navigate([`/leagues/${countryDetails.name}`]);
      this.loadingService.deactivate();
    }, 1000);

  }

}
