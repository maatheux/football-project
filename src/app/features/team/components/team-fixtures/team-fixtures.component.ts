import { Component, Input, OnInit } from '@angular/core';
import { TeamInfoParams } from '@features/team/interfaces/team-info-params.interface';

@Component({
  selector: 'app-team-fixtures',
  templateUrl: './team-fixtures.component.html',
  styleUrls: ['./team-fixtures.component.scss']
})
export class TeamFixturesComponent implements OnInit {

  @Input() teamInfoParams: TeamInfoParams = {
    leagueId: 0,
    season: 0,
    teamId: 0,
    team: "",
  };

  constructor() { }

  ngOnInit(): void {
  }

}
