import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsListComponent } from './components/teams-list/teams-list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { TeamInfoComponent } from './components/team-info/team-info.component';



@NgModule({
  declarations: [
    TeamsListComponent,
    TeamInfoComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RippleModule,
  ],
  exports: [
    TeamsListComponent,
    TeamInfoComponent,
  ]
})
export class TeamModule { }
