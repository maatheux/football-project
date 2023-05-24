import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamInfoParams } from '@features/team/interfaces/team-info-params.interface';
import { TeamsService } from '@features/team/services/teams.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss']
})
export class TeamInfoComponent implements OnInit {

  public teamInfoParams: TeamInfoParams = {
    leagueId: 0,
    season: 0,
    teamId: 0,
    team: "",
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private teamsService: TeamsService,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (res) => {
        this.teamInfoParams.leagueId = res?.['league'];
        this.teamInfoParams.season = res?.['season'];
        this.teamInfoParams.teamId = res?.['teamId'];
        this.teamInfoParams.team = res?.['team']

      }
    })
  }

}
