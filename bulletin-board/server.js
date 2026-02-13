import express from "express";
import dotenv from "dotenv";
import { engine } from "express-handlebars";
import BulletinsController from "./controllers/bulletins-controller.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.use("/bulletins", BulletinsController);

app.get("/", (req, res) => {
  res.render("home", { title: "Bulletin Board" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
