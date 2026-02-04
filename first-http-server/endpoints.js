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
