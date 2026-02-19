import { Router } from "express";
import { createClient } from "../utils/db.js";

const router = Router();

router.get("/", async (req, res) => {
  const client = createClient();
  await client.connect();
  try {
    const result = await client.query("SELECT * FROM bulletins ORDER BY created_at DESC");
    res.render("bulletins/index", { title: "Bulletin Board", bulletins: result.rows });
  } finally {
    await client.end();
  }
})



// GET /bulletins/new - Show form to create a new bulletin

router.get("/new", (req, res) => {
  res.render("bulletins/new", { title: "Create a New Bulletin" });
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const client = createClient();
  await client.connect();
  try {
    const result = await client.query("SELECT * FROM bulletins WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      res.status(404).send("Bulletin not found");
    } else {
      res.render("bulletins/show", { title: "Bulletin Details", bulletin: result.rows[0] });
    }
  } finally {
    await client.end();
  }
});




// REST representational state transfer

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
  res.redirect("/bulletins"); // Redirect to the list of bulletins after creating a new one
});

router.get("/:id/edit", async (req, res) => {
  const { id } = req.params;
  const client = createClient();
  await client.connect();
  try {
    const result = await client.query("SELECT * FROM bulletins WHERE id = $1", [id]);
    if (result.rows.length === 0) {
      res.status(404).send("Bulletin not found");
    } else {
      res.render("bulletins/edit", { title: "Edit Bulletin", bulletin: result.rows[0] });
    }
  } finally {
    await client.end();
  }
})

router.post("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const client = createClient();
  await client.connect();
  try {
    const result = await client.query(
      "UPDATE bulletins SET title = $1, content = $2 WHERE id = $3 RETURNING *",
      [title, content, id]
    );
    console.log(result.rows)

  } catch (err) {
    console.error("Error updating bulletin:", err);
  } finally {
    await client.end();
  }
  res.redirect(`/bulletins/${id}`); // Redirect to the updated bulletin's detail page
});

export default router;
