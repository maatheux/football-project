import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { TabViewModule } from 'primeng/tabview';
import { TeamPlayersComponent } from './components/team-players/team-players.component';
import { TeamLineupsComponent } from './components/team-lineups/team-lineups.component';
import { TeamFixturesComponent } from './components/team-fixtures/team-fixtures.component';
import { TeamGoalsComponent } from './components/team-goals/team-goals.component';



@NgModule({
  declarations: [
    TeamsListComponent,
    TeamInfoComponent,
    TeamPlayersComponent,
    TeamLineupsComponent,
    TeamFixturesComponent,
    TeamGoalsComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RippleModule,
    TabViewModule,
  ],
  exports: [
    TeamsListComponent,
    TeamInfoComponent,
  ]
})
export class TeamModule { }
