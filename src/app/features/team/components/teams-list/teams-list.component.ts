import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsResponse } from '@features/team/interfaces/teams-response.interface';
import { TeamsService } from '@features/team/services/teams.service';
import { LoadingService } from '@shared/services/loading.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

  public leagueId: number = 0;
  public season: number = 0;
  public leagueName: string = "";

  public teamsList: TeamsResponse[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private teamsService: TeamsService,
    private route: Router,
    private loadingService: LoadingService,
  ) { }

  ngOnInit(): void {
    this.loadingService.activate();
    this.activatedRoute.params.subscribe({
      next: (res) => {
        this.leagueId = res?.['league'];
        this.season = res?.['season'];
        this.leagueName = res?.['leagueName'];

        this.teamsService.GetAllTeams(this.leagueId, this.season).subscribe({
          next: (res) => {
            this.teamsList = [...res.sort((a, b) => {
              const teamA = a.team.name.toUpperCase();
              const teamB = b.team.name.toUpperCase();

              if (teamA < teamB) {
                return -1;
              }
              if (teamA > teamB) {
                return 1;
              }
              return 0;
            })];
            console.log(this.teamsList);
          },
          complete: () => this.loadingService.deactivate(),
        })

      }
    })
  }

  public SelectTeam(teamId: number, team: string) {
    this.route.navigate([`/teams/${this.leagueId}/${this.season}/${teamId}/${team}`]);
  }

}
