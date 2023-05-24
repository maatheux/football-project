import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService } from '@features/team/services/teams.service';

@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.scss']
})
export class TeamInfoComponent implements OnInit {

  public leagueId: number = 0;
  public season: number = 0;
  public teamId: number = 0;  

  constructor(
    private activatedRoute: ActivatedRoute,
    private teamsService: TeamsService,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (res) => {
        this.leagueId = res?.['league'];
        this.season = res?.['season'];
        this.teamId = res?.['team'];

      }
    })
  }

}
