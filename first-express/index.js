import express from 'express';
import HomeController from "./controllers/home_controller.js";
const app = express();


app.use("/whatever", (req, res, next) => {
  console.log(req.url);
  next();
  console.log(res.statusCode)
})

app.use("/home", HomeController);

app.get("/*", (req, res) => {
  res.status(400);
  res.send("My custom not found page");
})

app.listen("3000", () => {
  console.log("Server listening on port 3000");
});
