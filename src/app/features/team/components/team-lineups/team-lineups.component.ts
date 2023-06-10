import { Component, Input, OnInit } from '@angular/core';
import { LineupStatistics } from '@features/team/interfaces/lineup-statistics.interface';
import { TeamInfoParams } from '@features/team/interfaces/team-info-params.interface';
import { TeamsService } from '@features/team/services/teams.service';
import { LoadingService } from '@shared/services/loading.service';

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

  public lineupStatistics: LineupStatistics[] = []

  constructor(
    private teamsService: TeamsService,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.loadingService.activate();
    this.teamsService.GetTeamStatistics(this.teamInfoParams.leagueId, this.teamInfoParams.season, this.teamInfoParams.teamId).subscribe({
      next: (res) => {
        this.lineupStatistics = [...res.lineups];
      },
      complete: () => this.loadingService.deactivate(),
    })
  }

}
