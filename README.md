# API-Riot-Data rest created with Deno.


## Gettint Started

### First Install [Deno](https://deno.land/#installation)

### Run

Create a .env file and place your Riot DEV API Key:

```
API_KEY=XXXXX-XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
```
```
deno run --allow-net --allow-read src/index.ts
```

(Optional) You can use [Deno-cli](https://www.npmjs.com/package/deno-cli), my own npm package to initiate and run deno projects. 

```bash
dm run #Runs the 'deno run' command based on the configs at config.json
```

## Routes
>  All data that is used in this API is taken from [Riot developer API's](https://developer.riotgames.com/apis)

* [Get summoner info by Summoner name](#route-nick)
* [Get summoner's maesteries info by Summoner name](#route-mastery-nick)
* [Get summoner's maesteries info by Summoner name and quantity of champions](#route-mastery-nick-qnt)

<h3 id="route-nick"><code>/:nick</code></h3>

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


<h3 id="route-mastery-nick"><code>/mastery/:nick</code></h3>


Return the info's about all the champions maesteries that a summoner have :

`localhost:8080/mastery/lmrush`

```json
[
  {
    "championId": 245,
    "championLevel": 7,
    "championPoints": 260711,
    "lastPlayTime": 1605793639000,
    "championPointsSinceLastLevel": 239111,
    "championPointsUntilNextLevel": 0,
    "chestGranted": false,
    "tokensEarned": 0,
    "summonerId": "-m7xFnmqkhoW_jeeFOTiGdTOzqd6p5QHaLiSMHn24MkUJ40"
  },
  {
    "championId": 236,
    "championLevel": 7,
    "championPoints": 138627,
    "lastPlayTime": 1609962554000,
    "championPointsSinceLastLevel": 117027,
    "championPointsUntilNextLevel": 0,
    "chestGranted": false,
    "tokensEarned": 0,
    "summonerId": "-m7xFnmqkhoW_jeeFOTiGdTOzqd6p5QHaLiSMHn24MkUJ40"
  },
  ...
  {
    "championId": 104,
    "championLevel": 7,
    "championPoints": 130162,
    "lastPlayTime": 1609426357000,
    "championPointsSinceLastLevel": 108562,
    "championPointsUntilNextLevel": 0,
    "chestGranted": false,
    "tokensEarned": 0,
    "summonerId": "-m7xFnmqkhoW_jeeFOTiGdTOzqd6p5QHaLiSMHn24MkUJ40"
  }
]
```

<h3 id="route-mastery-nick-qnt"><code>/mastery/:nick/:qnt</code></h3>

Return the info's about `n` champions maesteries that a summoner have :

`localhost:8080/mastery/lmrush/3`

```json
[
  {
    "championId": 245,
    "championLevel": 7,
    "championPoints": 260711,
    "lastPlayTime": 1605793639000,
    "championPointsSinceLastLevel": 239111,
    "championPointsUntilNextLevel": 0,
    "chestGranted": false,
    "tokensEarned": 0,
    "summonerId": "-m7xFnmqkhoW_jeeFOTiGdTOzqd6p5QHaLiSMHn24MkUJ40"
  },
  {
    "championId": 236,
    "championLevel": 7,
    "championPoints": 138627,
    "lastPlayTime": 1609962554000,
    "championPointsSinceLastLevel": 117027,
    "championPointsUntilNextLevel": 0,
    "chestGranted": false,
    "tokensEarned": 0,
    "summonerId": "-m7xFnmqkhoW_jeeFOTiGdTOzqd6p5QHaLiSMHn24MkUJ40"
  },
  {
    "championId": 104,
    "championLevel": 7,
    "championPoints": 130162,
    "lastPlayTime": 1609426357000,
    "championPointsSinceLastLevel": 108562,
    "championPointsUntilNextLevel": 0,
    "chestGranted": false,
    "tokensEarned": 0,
    "summonerId": "-m7xFnmqkhoW_jeeFOTiGdTOzqd6p5QHaLiSMHn24MkUJ40"
  }
]
```