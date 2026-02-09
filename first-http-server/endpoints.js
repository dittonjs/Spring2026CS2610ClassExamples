import { Response } from "./response.js";
import { Client } from "pg";
import { readFileSync } from "fs";

export async function index(request) {
  return new Response(
    200,
    "OK",
    "<div>Welcome! Go to <a href='/movies'>movies</a></div>"
  )
}

export async function about(request) {
  return new Response(
    200,
    "OK",
    "<div>This is the about page</div>"
  )
}

export async function profile(request) {
  return new Response(200, "OK", "<h1>You shouldn't see me!</h1>");
}

export async function handlePost(request) {
  console.log(request.parsedBody);
  return new Response("<h1>Request Recieved!</h1>")
}

export async function movies(request) {
  const client = new Client(
    {
      host: "localhost",
      port: 5432,
      user: "firsthttp",
      password: "asdfasdf",
      database: "firsthttp"
    }
  );
  try {
    await client.connect();
    const movies = await client.query("SELECT * FROM movie;")

    const listItems = movies.rows.map((movie) => {
      return `
        <li>
          ${movie.title}
        </li>
      `
    }).join("\n");

    const htmlTemplate = readFileSync("templates/movies.html").toString();
    const final = htmlTemplate.replace("{{MOVIES}}", listItems);

    return new Response(200, "OK", final);
  } finally {
    await client.end();
  }
}
