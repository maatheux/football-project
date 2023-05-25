import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { SearchCountryComponent } from '@features/country/components/search-country/search-country.component';
import { LeaguesListComponent } from '@features/league/components/leagues-list/leagues-list.component';
import { TeamsListComponent } from '@features/team/components/teams-list/teams-list.component';
import { TeamInfoComponent } from '@features/team/components/team-info/team-info.component';
import { AuthGuard } from '@core/security/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: SearchCountryComponent,
  },
  {
    path: 'leagues/:country',
    component: LeaguesListComponent,
  },
  {
    path: 'teams/:league/:season',
    component: TeamsListComponent,
  },
  {
    path: 'teams/:league/:season/:teamId/:team',
    component: TeamInfoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
