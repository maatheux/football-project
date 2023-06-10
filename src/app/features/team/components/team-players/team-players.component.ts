import { Component, Input, OnInit } from '@angular/core';
import { NgxCookieService } from '@core/services/ngx-cookie.service';
import { TeamInfoParams } from '@features/team/interfaces/team-info-params.interface';
import { TeamsService } from '@features/team/services/teams.service';
import { LoadingService } from '@shared/services/loading.service';

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

  public playersResponse: any;
  public playersList: any[] = [];

  private page: number = 1;

  constructor(
    private teamsService: TeamsService,
    private loadingService: LoadingService
  ) { }

  ngOnInit(): void {
    this.GetPlayers(false);
  }

  public GetPlayers(morePlayers: boolean) {
    this.loadingService.activate();
    if (morePlayers) this.page += 1;

    this.teamsService.GetPlayers(this.teamInfoParams.leagueId, this.teamInfoParams.season, this.teamInfoParams.teamId, this.page).subscribe({
      next: (res) => {
        this.playersResponse = res;
        this.playersList.push(...this.playersResponse.response);
      },
      complete: () => this.loadingService.deactivate(),
    })
  }

}
