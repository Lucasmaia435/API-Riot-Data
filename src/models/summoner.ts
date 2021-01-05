import League from "./league.ts";

export interface summoner {
  id: String;
  accountId: String;
  puuid: String;
  name: String;
  profileIconId: Number;
  summonerLevel: Number;
  ranks: League[];
}

export default class Summoner {
  id: String;
  accountId: String;
  puuid: String;
  name: String;
  profileIconId: Number;
  summonerLevel: Number;
  ranks: League[];

  constructor(Json:summoner, Ranks: League[]){
    this.id = Json.id;
    this.accountId = Json.accountId;
    this.puuid = Json.puuid;
    this.name = Json.name;
    this.profileIconId = Json.profileIconId;
    this.summonerLevel = Json.summonerLevel;
    this.ranks = Ranks;
  }
  
}