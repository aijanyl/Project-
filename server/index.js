require("dotenv").config();
const express = require("express");
const path = require("path");
const sequelize = require("./database");
const models = require("./models/index");
const cors = require("cors");
const routes = require("./routes/index");
const morgan = require("morgan");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve("public")));
app.use(morgan("tiny"));

app.use("/api/v1", routes);

const run = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`server running on port: ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

run();
