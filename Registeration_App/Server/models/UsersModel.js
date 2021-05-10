const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  EmailID: {
    type: String,
    required: "EmailID can't be empty",
  },
  Password: {
    type: String,
    required: "Password can't be empty",
    minlength: [4, "Password must be atleast 4 character"],
  },
});

userSchema.path("EmailID").validate((val) => {
  emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(val);
}, "Invalid E-mail");

mongoose.model("Users", userSchema);
