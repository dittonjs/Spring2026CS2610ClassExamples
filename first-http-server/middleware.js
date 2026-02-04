import { Response } from "./response.js";
// next is a middleware... or something with the same signature
export function loggingMiddlewareFactory(next) {
  return function (request) {
    // do something with the request
    console.log(`${request.method} ${request.uri}`)
    // call the next middleware
    const response = next(request);
    // do something with the response
    console.log(`${request.uri} ${response.status} ${response.reason}`)
    // return a response;
    return response;
  }
}

export function JSONParsingMiddlewareFactory(next) {
  return function (request) {
    if (request.headers["Content-Type"] == "application/json") {
      request.parsedBody = JSON.parse(request.body);
    }
    return next(request);
  }
}

export function authenticationMiddlewareFactory(next) {
  return function (request) {
    if (!request.headers["Authorization"] && request.uri == "/profile") {
      return new Response(401, "Unauthorized", "<h1>You can't do that action!</h1>")
    }
    return next(request);

  }
}




