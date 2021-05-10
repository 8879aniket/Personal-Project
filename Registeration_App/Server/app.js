const config = require("./config/config");
const DataBase = require("./models/db");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const registermodel = require("./models/RegisterationModel");
const loginmodel = require("./models/UsersModel");
const routerIndex = require("./routers/IndexRouter");

app.use(bodyParser.json());
app.use(cors());

app.use("/api", routerIndex);

// app.use((err, req, res, next) => {
//   if (err.name === "ValidationError") {
//     var valErr = [];
//     Object.keys(err.errors).forEach((key) =>
//       valErr.push(err.errors[key].message)
//     );
//     res.status(422).send(valErr);
//   }
// });

app.listen(process.env.PORT, () =>
  console.log(`Server started and listening to ${process.env.PORT}`)
);
