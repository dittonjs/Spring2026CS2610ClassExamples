import { Response } from "./response.js";
import { index, about, profile, movies } from "./endpoints.js";

export async function router(request) {
  if (request.uri === "/") {
    // call the / endpoint
    return await index(request);
  } else if (request.uri === "/about") {
    // call the about endpoint
    return await about(request);
  } else if (request.uri === "/profile") {
    return await profile(request);
  } else if (request.uri === "/movies") {
    return await movies(request);
  } else {
    return new Response(
      404,
      "NOT FOUND",
      "<div>Page not found</div>"
    )
  }
}
