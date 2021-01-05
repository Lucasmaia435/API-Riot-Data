import {
  Server,
  ServerRequest,
} from "https://deno.land/std@0.83.0/http/server.ts";

interface Callback {
  (req: Request): any;
}

interface Params {
  [key: string]: string;
}
interface GetMethod {
  route: String;
  callback: Callback;
}

export class Router {
  private getRoutes: Array<GetMethod>;

  constructor() {
    this.getRoutes = [];
  }

  async listen(server: Server) {
    for await (const request of server) {
      if (request.method == "GET") {

        for (const getRoute of this.getRoutes) {
          this.checkRoute(getRoute, request);
        }

      }
    }
  }
  /**
     * get
     * @param route 
     * @param callback function that is called when the @route is listened
     */
  public get(route: String, callback: Callback) {
    const newGetMethod: GetMethod = {
      route: route,
      callback: callback,
    };

    this.getRoutes.push(newGetMethod);
  }

  private runGet(route: GetMethod, request: ServerRequest, params: Params): any {
    var r: Request = new Request(request, params);

    return route.callback(r);
  }

  private checkRoute(registeredRoute: GetMethod, request: ServerRequest) {

    const url = request.url.split('/').filter(item => item !== "");
    const route = registeredRoute.route.replaceAll('/', '').split(':').filter(item => item !== "");

    const params = new Map();

    if (route.length == url.length) {

      for (let i = 0; i < url.length; i++) {
        params.set(route[i], url[i]);
      }

      const o = Object.fromEntries(params);

      this.runGet(registeredRoute, request, o as Params);

      return o as Params;
    } else {
      return false;
    }
  }
}

export class Request {

  serverRequest: ServerRequest;
  params: Params;

  constructor(serverRequest: ServerRequest, params: Params) {
    this.serverRequest = serverRequest;
    this.params = params;
  }

  /**
   * send
   * @data String or Json strinfied to respond the request
   */
  public send(data: any) {
    this.serverRequest.respond(data);
  }
}



