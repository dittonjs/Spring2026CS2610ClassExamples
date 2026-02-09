import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("<h1>Hello, world!</h1>");
});

router.get("/profile", (req, res) => {
  res.send("I am on the profile page")
})

export default router;
