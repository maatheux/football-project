import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaguesListComponent } from './components/leagues-list/leagues-list.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';



@NgModule({
  declarations: [
    LeaguesListComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    RippleModule,
  ],
  exports: [
    LeaguesListComponent,
  ]
})
export class LeagueModule { }
