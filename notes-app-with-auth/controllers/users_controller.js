import { Router } from "express";

const router = Router();

router.post("/", (req, res) => {
  // todo write this
  console.log(req.body);
  res.send("ok");
});

router.get("/new", (req, res) => {
  res.render("users/new");
});

export default router;
