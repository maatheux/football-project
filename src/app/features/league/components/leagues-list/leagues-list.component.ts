import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LeaguesResponse } from '@features/league/interfaces/leagues-response.interface';
import { LeaguesService } from '@features/league/services/leagues.service';

@Component({
  selector: 'app-leagues-list',
  templateUrl: './leagues-list.component.html',
  styleUrls: ['./leagues-list.component.scss']
})
export class LeaguesListComponent implements OnInit {

  public selectedCountry: string = "";
  public leaguesList: LeaguesResponse[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private leaguesService: LeaguesService,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe({
      next: (res) => {
        this.selectedCountry = res?.['country'];
        this.leaguesService.GetAllLeagues(this.selectedCountry).subscribe({
          next: (res) => {
            this.leaguesList = [...res];
            console.log(this.leaguesList);

          }
        })
      }
    })
  }

  public SelectLeagueAndSeason(leagueId: number, season: number) {
    this.route.navigate([`/teams/${leagueId}/${season}`]);
  }

}
