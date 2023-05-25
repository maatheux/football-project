import { FixturesStatistics } from "./fixtures-statistics.interface";
import { LineupStatistics } from "./lineup-statistics.interface";

export interface TeamStatistics {
  biggest: any,
  cards: any,
  clean_sheet: any,
  failed_to_score: any,
  fixtures: FixturesStatistics,
  form: string,
  goals: any,
  league: any,
  lineups: LineupStatistics[],
  penalty: any,
  team: any,
}
