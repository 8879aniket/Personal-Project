const mongoose = require("mongoose");

let employeeSchema = new mongoose.Schema({
  EmployeeID: {
    type: String,
    required: true,
  },
  FirstName: {
    type: String,
    required: "FirstName can't be empty",
  },
  LastName: {
    type: String,
    required: "LastName can't be empty",
  },
  EmailID: {
    type: String,
    required: "EmailID can't be empty",
    unique: true,
  },
  Password: {
    type: String,
    required: "Password can't be empty",
    minlength: [4, "Password must be atleast 4 character"],
  },
  OrganizationName: {
    type: String,
    required: "OrganizationName can't be empty",
  },
});

employeeSchema.path("EmailID").validate((val) => {
  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, "Invalid E-mail");

mongoose.model("Employee", employeeSchema);
