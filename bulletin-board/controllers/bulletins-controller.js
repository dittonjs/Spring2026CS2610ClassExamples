import { Router } from "express";
import { createClient } from "../utils/db.js";

const router = Router();

// GET /bulletins - List all bulletins
router.get("/", (req, res) => {
  res.send("List of bulletins will go here");
})

// GET /bulletins/new - Show form to create a new bulletin
router.get("/new", (req, res) => {
  res.render("new-bulletin", { title: "Create a New Bulletin" });
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const client = createClient();
  await client.connect();
  try {
    const { title, content } = req.body;
    await client.query(
      "INSERT INTO bulletins (title, content) VALUES ($1, $2)",
      [title, content]
    );
  } catch (err) {
    console.error("Error inserting bulletin:", err);
  } finally {
    await client.end();
  }
  res.redirect("/"); // Redirect to the list of bulletins after creating a new one
});

export default router;
