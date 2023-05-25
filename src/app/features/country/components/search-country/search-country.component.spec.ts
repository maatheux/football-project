import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SearchCountryComponent } from './search-country.component';
import { CountriesService } from '@features/country/services/countries.service';
import { of } from 'rxjs';
import { CountriesResponse } from '@features/country/interfaces/countries-response.interface';
import { Router } from '@angular/router';

describe('SearchCountryComponent', () => {
  let component: SearchCountryComponent;
  let fixture: ComponentFixture<SearchCountryComponent>;
  let countriesService: jasmine.SpyObj<CountriesService>;

  beforeEach(() => {
    const countriesServiceSpy = jasmine.createSpyObj('CountriesService', ['GetAllCountries']);

    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [SearchCountryComponent],
      providers: [{ provide: CountriesService, useValue: countriesServiceSpy }],
    });

    fixture = TestBed.createComponent(SearchCountryComponent);
    component = fixture.componentInstance;
    countriesService = TestBed.inject(CountriesService) as jasmine.SpyObj<CountriesService>;
  });

  it('should fetch countries on component initialization', () => {
    const countries: CountriesResponse[] = [
      {
        name: "Brazil",
        code: "BR",
        flag: "https://media-3.api-sports.io/flags/br.svg"
      },
      {
        name: "Bulgaria",
        code: "BG",
        flag: "https://media-2.api-sports.io/flags/bg.svg"
      },
    ];

    countriesService.GetAllCountries.and.returnValue(of(countries));

    fixture.detectChanges();

    expect(component.countries).toEqual(countries);
  });

  it('should navigate to leagues page after selecting a country', () => {
    const countryDetails: CountriesResponse = {
      name: "Brazil",
      code: "BR",
      flag: "https://media-3.api-sports.io/flags/br.svg"
    };
    const navigateSpy = spyOn(TestBed.inject(Router), 'navigate');

    component.SelectCountry({ value: countryDetails });

    expect(navigateSpy).toHaveBeenCalledWith(['/leagues', countryDetails.name]);
  });

});
