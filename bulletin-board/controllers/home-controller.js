import { Router } from "express";
const router = Router();

router.get("/", async (req, res) => {
  res.redirect("/bulletins");
});

export default router;
