import { Component, Input, OnInit } from '@angular/core';
import { FixturesStatistics } from '@features/team/interfaces/fixtures-statistics.interface';
import { TeamInfoParams } from '@features/team/interfaces/team-info-params.interface';
import { TeamsService } from '@features/team/services/teams.service';

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

  public fixturesStatistics: any[] = [];

  constructor(
    private teamsService: TeamsService
  ) { }

  ngOnInit(): void {
    this.teamsService.GetTeamStatistics(this.teamInfoParams.leagueId, this.teamInfoParams.season, this.teamInfoParams.teamId).subscribe({
      next: (res) => {
        this.fixturesStatistics = Object.entries(res.fixtures);
      }
    })
  }
}
