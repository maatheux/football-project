import { Component, Input, OnInit } from '@angular/core';
import { TeamInfoParams } from '@features/team/interfaces/team-info-params.interface';

@Component({
  selector: 'app-team-players',
  templateUrl: './team-players.component.html',
  styleUrls: ['./team-players.component.scss']
})
export class TeamPlayersComponent implements OnInit {

  @Input() teamInfoParams: TeamInfoParams = {
    leagueId: 0,
    season: 0,
    teamId: 0,
    team: "",
  };

  constructor() { }

  ngOnInit(): void {
    console.log(this.teamInfoParams);
  }

}
