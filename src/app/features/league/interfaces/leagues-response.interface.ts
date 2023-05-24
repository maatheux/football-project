import { CountriesResponse } from "@features/country/interfaces/countries-response.interface";
import { League } from "./league.interface";

export interface LeaguesResponse {
  league: League,
  country: CountriesResponse,
  seasons: any[],
}
