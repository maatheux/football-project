import { Component, Input, OnInit } from '@angular/core';
import { TeamInfoParams } from '@features/team/interfaces/team-info-params.interface';

@Component({
  selector: 'app-team-goals',
  templateUrl: './team-goals.component.html',
  styleUrls: ['./team-goals.component.scss']
})
export class TeamGoalsComponent implements OnInit {

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
