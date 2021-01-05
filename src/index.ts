import { serve } from "https://deno.land/std@0.83.0/http/server.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";

import { Router, Request } from "./Router.ts";
import Summoner, { summoner } from './models/summoner.ts';

const server = serve({ port: 8080 });

const router = new Router();

const url_api = 'https://br1.api.riotgames.com';

const key = config().API_KEY;

router.listen(server);

router.get('/:nick', async (req: Request) => {

    const sName = decodeURI(req.params.nick);
    
    const sFetchedData = await fetch(`${url_api}/lol/summoner/v4/summoners/by-name/${sName}?api_key=${key}`);
    
    const finalData = await sFetchedData.body?.getReader().read();

    const data = new TextDecoder('utf-8').decode(finalData?.value);

    
    // -----------------------------------------------------------

    const rFetchedData = await fetch(`${url_api}/lol/league/v4/entries/by-summoner/${JSON.parse(data).id}?api_key=${key}`);

    const finalrData = await rFetchedData.body?.getReader().read();

    const rData =  new TextDecoder('utf-8').decode(finalrData?.value);
    
    
    const invocador: summoner = new Summoner(JSON.parse(data),JSON.parse(rData)); 
    return req.send({
        status: 200,
        body: JSON.stringify(invocador)
    });
});

router.get('/',(req: Request) => {
    return req.send({
        status: 200,
        body: JSON.stringify({
            message: 'Hello world',
            time: new Date(),
        })
    });
});




