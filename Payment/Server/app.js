const config = require("./Config/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const router = require("./Routers/routers");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(
    `Payment Server started and listening to port :${process.env.PORT}`
  );
});
