require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./Routes");
const mongoConfig = require("./config/mongoConfig");
const app = express();

mongoConfig();
app.use(express.json());
app.use(cors());
app.use("/", router);

const Port = process.env.PORT || 8000;
app.listen(Port, () => {
  console.log("Port Runnig");
});
