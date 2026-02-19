import express from "express";
import dotenv from "dotenv";
import { engine } from "express-handlebars";
import BulletinsController from "./controllers/bulletins-controller.js";
import HomeController from "./controllers/home-controller.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static("public")); // Serve static files from the "public" directory

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies

app.use("/", HomeController);
app.use("/bulletins", BulletinsController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
