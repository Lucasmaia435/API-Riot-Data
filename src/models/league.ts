export default interface League {
    leagueId: String;
    queueType: String;
    tier: String;
    rank: String;
    summonerId: String;
    summonerName: String;
    leaguePoints: Number;
    wins: Number;
    losses: Number;
    veteran: boolean;
    inactive: boolean;
    freshBlood: boolean;
    hotStreak: boolean;
  }