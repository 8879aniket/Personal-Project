const { response } = require("express");
const mongoose = require("mongoose");
const register = mongoose.model("Employee");
const users = mongoose.model("Users");

module.exports.register = (req, res, next) => {
  var registers = new register();
  registers.EmployeeID = new Date().getTime();
  registers.FirstName = req.body.FirstName;
  registers.LastName = req.body.LastName;
  registers.EmailID = req.body.EmailID;
  registers.Password = req.body.Password;
  registers.OrganizationName = req.body.OrganizationName;

  registers.save((error, response) => {
    if (error) {
      console.log(`Failed to insert Data in DataBase : ${error}`);
      res.send({ error });
      return;
    }
  });

  // var user = new users();
  // user.EmailID = req.body.EmailID;
  // user.Password = req.body.Password;
  // user.save((error, response) => {
  //   if (error) {
  //     console.log(`Failed to insert Data in DataBase : ${error}`);
  //     res.send({ error });
  //     return;
  //   }
  // });
};

module.exports.getData = (req, res, next) => {
  const Data = register.find({}, (error, response) => {
    if (error)
      return console.log(`Failed to fetch Data from Database : ${error}`);
    res.send(response);
  });
};

module.exports.getPerticularFirstName = (req, res, next) => {
  const Data = register.find(
    { FirstName: req.params.FirstName },
    (error, response) => {
      if (error)
        return console.log(`Failed to fetch Data from Database : ${error}`);
      res.send(response);
    }
  );
};

module.exports.getPerticularLastName = (req, res, next) => {
  const Data = register.find(
    { LastName: req.params.LastName },
    (error, response) => {
      if (error)
        return console.log(`Failed to fetch Data from Database : ${error}`);
      res.send(response);
    }
  );
};

module.exports.getPerticularEmailName = (req, res, next) => {
  const Data = register.find(
    { EmailID: req.params.EmailID },
    (error, response) => {
      if (error)
        return console.log(`Failed to fetch Data from Database : ${error}`);
      res.send(response);
    }
  );
};

module.exports.getPerticularEmailLogin = (req, res, next) => {
  const Data = users.find(
    { EmailID: req.params.EmailID },
    (error, response) => {
      if (error)
        return console.log(`Failed to fetch Data from Database : ${error}`);
      res.send(response);
    }
  );
};

module.exports.Delete = (req, res, next) => {
  const removeData = register.remove(
    { EmailID: req.params.EmailID },
    (error, response) => {
      if (error)
        return console.log(`Failed to fetch Data from Database : ${error}`);
      res.send(response);
    }
  );
};

module.exports.Patch = (req, res, next) => {
  const removeData = register.Patch(
    { EmailID: req.params.EmailID },
    {
      $set: {
        FirstName: req.body.FirstName,
        LastName: req.body.LastName,
        EmailID: req.body.EmailID,
        OrganizationName: req.body.OrganizationName,
      },
    },
    (error, response) => {
      console.log("In Delete Data");
      if (error)
        return console.log(`Failed to fetch Data from Database : ${error}`);
      res.send(response);
    }
  );
};
