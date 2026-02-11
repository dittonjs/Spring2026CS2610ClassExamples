import express from 'express';
import MoviesController from "./controllers/movies_controller.js";
import { dbClient } from './middleware/db_client.js';
import dotenv from "dotenv";
import { engine } from 'express-handlebars';



dotenv.config();
const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// apply middleware the attaches the db client to the request object
app.use(dbClient);

app.use("/", MoviesController);

app.listen("3000", () => {
  console.log("Server listening on port 3000");
});
