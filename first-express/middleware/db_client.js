import { getDBClient } from "../utils/db.js";

export async function dbClient(req, res, next) {
  const client = getDBClient();
  req.dbClient = client;
  try {
    await req.dbClient.connect();
    await next();
  } finally {
    res.on("finish", () => {
      client.end();
    });
  }
}
