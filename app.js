import express from "express";
import mongoose from "mongoose";
import path from "path";
import bodyParser from "body-parser";

import routes from "./src/routers/crmRoutes";

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect("uri", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

routes(app);

app.get("/", (req, res, next) => {
  res.send("hello there");
});

//mongoose connection

const PORT = 3000;
//Server Listen
app.listen(PORT, () => {
  console.log(`Your server is running on port ${PORT}`);
});
