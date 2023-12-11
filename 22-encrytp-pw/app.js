const express = require("express");
const app = express();
const dotenv = require("dotenv");
const session = require("express-session");
dotenv.config();
const PORT = process.env.PORT || 8888;

const db = require("./models/index");

app.set("view engine", "ejs");
app.set("views", "./views");

app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes");
app.use("/", indexRouter); // localhost:PORT/

app.get("*", (req, res) => {
  res.render("404");
});

db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`${PORT} open`);
  });
});
