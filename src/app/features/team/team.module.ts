import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsListComponent } from './components/teams-list/teams-list.component';



@NgModule({
  declarations: [
    TeamsListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TeamsListComponent,
  ]
})
export class TeamModule { }
