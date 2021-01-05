# API-Riot-Data rest created with Deno.


## Gettint Started

### First Install [Deno](https://deno.land/#installation)

### Run
```
deno run --allow-net --allow-read src/index.ts
```

(Optional) You can use [Deno-cli](https://www.npmjs.com/package/deno-cli), my own npm package to initiate and run deno projects. 

```bash
dm run #Runs the 'deno run' command based on the configs at config.json
```

## Routes
>  All data that is used in this API is taken from [Riot developer API's](https://developer.riotgames.com/apis)


### `GET` `/:nick`

Return the info's about a summoner in League of Legends :

`localhost:8080/lmrush`

```json
{
  "id": "...",
  "accountId": "...",
  "puuid": "...",
  "name": "lmrush",
  "profileIconId": 4841,
  "summonerLevel": 319,
  "ranks": [
    {
      "leagueId": "5ea9b852-fac6-4517-9bcc-5ea709422415",
      "queueType": "RANKED_FLEX_SR",
      "tier": "PLATINUM",
      "rank": "III",
      "summonerId": "-m7xFnmqkhoW_jeeFOTiGdTOzqd6p5QHaLiSMHn24MkUJ40",
      "summonerName": "lmrush",
      "leaguePoints": 0,
      "wins": 113,
      "losses": 112,
      "veteran": false,
      "inactive": false,
      "freshBlood": false,
      "hotStreak": false
    },
    {
      "leagueId": "84f72a15-2f66-49c8-89ba-44875da8ec5c",
      "queueType": "RANKED_SOLO_5x5",
      "tier": "DIAMOND",
      "rank": "IV",
      "summonerId": "-m7xFnmqkhoW_jeeFOTiGdTOzqd6p5QHaLiSMHn24MkUJ40",
      "summonerName": "lmrush",
      "leaguePoints": 2,
      "wins": 140,
      "losses": 131,
      "veteran": false,
      "inactive": false,
      "freshBlood": false,
      "hotStreak": false
    }
  ]
}

```
