import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderModule } from '@features/header/header.module';
import { CountryModule } from '@features/country/country.module';
import { LeagueModule } from '@features/league/league.module';
import { TeamModule } from '@features/team/team.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderModule,
    CountryModule,
    LeagueModule,
    TeamModule
  ]
})
export class HomeModule { }
