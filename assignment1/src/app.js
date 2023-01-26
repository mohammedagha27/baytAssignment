const express = require("express");
const morgan = require("morgan");

const app = express();
require("dotenv").config();

const { join } = require("path");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const router = require("./router");

app.set("port", process.env.PORT || 4000);
app.use(morgan("dev"));
app.use(compression());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable("x-powered-by");

app.use("/api/v1", router);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(join(__dirname, "..", "client", "build")));
  app.use("*", (req, res) => {
    res.sendFile(join(__dirname, "..", "client", "build", "index.html"));
  });
}

app.get("/m", (req, res) => {
  res.json({ msg: "msg" });
});

app.use((req, res) => {
  res.status(404).send("page not found");
});

// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  const { status, errMsg, field } = err;
  if (status) {
    res.status(err.status).json({ error: errMsg, name: field });
  } else res.status(500).send("server error");
});

module.exports = app;
