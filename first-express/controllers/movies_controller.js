import { Router } from "express";
import { getDBClient } from "../utils/db.js";

const router = Router();

router.get("/", async (req, res) => {
  const movies = await req.dbClient.query(`SELECT * FROM movie;`);
  res.render("movies", { pageTitle: "Movies Page", isAdmin: true, movies: movies.rows })
})

export default router;
