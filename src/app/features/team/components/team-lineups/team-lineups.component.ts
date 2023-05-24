import { Component, Input, OnInit } from '@angular/core';
import { TeamInfoParams } from '@features/team/interfaces/team-info-params.interface';

@Component({
  selector: 'app-team-lineups',
  templateUrl: './team-lineups.component.html',
  styleUrls: ['./team-lineups.component.scss']
})
export class TeamLineupsComponent implements OnInit {

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
