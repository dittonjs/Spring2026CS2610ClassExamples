import { Response } from "./response.js";
import { index, about } from "./endpoints.js";

export function router(request) {
  if (request.uri === "/") {
    // call the / endpoint
    return index(request);
  } else if (request.uri === "/about") {
    // call the about endpoint
    return about(request);
  } else {
    return new Response(
      404,
      "NOT FOUND",
      "<div>Page not found</div>"
    )
  }
}
