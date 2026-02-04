import { Response } from "./response.js";

export function index(request) {
  return new Response(
    200,
    "OK",
    "<div>Welcome! Go to <a href='/about'>about</a></div>"
  )
}

export function about(request) {
  return new Response(
    200,
    "OK",
    "<div>This is the about page</div>"
  )
}

export function profile(request) {
  return new Response(200, "OK", "<h1>You shouldn't see me!</h1>");
}

export function handlePost(request) {
  console.log(request.parsedBody);
  return new Response("<h1>Request Recieved!</h1>")
}
