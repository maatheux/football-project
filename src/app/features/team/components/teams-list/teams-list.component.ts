import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsResponse } from '@features/team/interfaces/teams-response.interface';
import { TeamsService } from '@features/team/services/teams.service';

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {

  public leagueId: number = 0;
  public season: number = 0;

  public teamsList: TeamsResponse[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private teamsService: TeamsService,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (res) => {
        this.leagueId = res?.['league'];
        this.season = res?.['season']

        this.teamsService.GetAllTeams(this.leagueId, this.season).subscribe({
          next: (res) => {
            this.teamsList = [...res];

          }
        })

      }
    })
  }

  public SelectTeam(teamId: number, team: string) {
    this.route.navigate([`/teams/${this.leagueId}/${this.season}/${teamId}/${team}`]);
  }

}
