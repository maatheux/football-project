import { Component, Input, OnInit } from '@angular/core';
import { TeamInfoParams } from '@features/team/interfaces/team-info-params.interface';
import { TeamsService } from '@features/team/services/teams.service';

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

  private goalsStatistics: any[] = [];

  public goalsChartData: any;
  public goalsChartOptions: any

  constructor(
    private teamsService: TeamsService
  ) { }

  ngOnInit(): void {
    /* this.goalsChartOptions = {
      plugins: {
        datalabels: {
          align: 'end',
          anchor: 'end',
          borderRadius: 4,
          padding: 4,
          color: 'white',
          backgroundColor: function(context: any) {
            return context.dataset.backgroundColor;
          },
          display: function(context: any) {
            return context.dataset.data[context.dataIndex];
          },
          font: function(context: any) {
            var w = context.chart.width;
            return {
              size: w < 512 ? 12 : 14,
              weight: 'bold',
            };
          },
        }
      },
    } */ // not working

    this.teamsService.GetTeamStatistics(this.teamInfoParams.leagueId, this.teamInfoParams.season, this.teamInfoParams.teamId).subscribe({
      next: (res) => {
        this.goalsStatistics = Object.entries(res.goals.for.minute);

        this.goalsChartData = {
          labels: this.goalsStatistics.map(x => `${x[0]}min`),
          datasets: [
              {
                  label: 'Gols',
                  backgroundColor: '#1d3557ff',
                  data: this.goalsStatistics.map(x => x[1].total)
              },
          ]
        };

      }
    })
  }

}
