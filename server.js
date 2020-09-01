const express = require("express");
var bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const config = require("config");

const app = express();

//for request entity to load
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

//for call api
app.use(express.json());

//DB Config
const dbURI = config.get("mongoURI");
//Connect to Mongo
mongoose
  .connect(dbURI, { useNewUrlParser: true, useCreateIndex: true })
  .then(() => console.log("mongoDB connected"))
  .catch(err => console.log("error", err));

//Use Routes to call api
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/category", require("./routes/api/categoryArticle"));
app.use("/api/article", require("./routes/api/article"));

//Serve static assets if in production
if (process.env.NODE_ENV === "production") {
  //set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "clinet", "build", "index.html"));
  });
}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server started on port ${port}`));
