const express = require("express");
const router = express.Router();
const valid = require("card-validator");

router.post("/Payment", (req, res) => {
  const cardDetails = valid.number(req.body.userCardNumber);
  if (cardDetails.isPotentiallyValid) {
    if (cardDetails.isValid) {
      if (req.body.userCVV.length === cardDetails.card.code.size) {
        res.send({
          status: true,
          reason: "",
          message:
            "Your Payment for Rs" + req.body.userAmount + " is successful",
          modeOfPayment: "Credit Card",
          issuedBy: cardDetails.card.niceType,
        });
      } else {
        res.send({
          status: false,
          reason: "Card CVV is invalid",
          message: `Please Enter Valid Card CVV i:e ${cardDetails.card.code.size} Digit`,
          modeOfPayment: "Credit Card",
          issuedBy: cardDetails.card.niceType || "",
        });
      }
    } else {
      res.send({
        status: false,
        reason: "Card Number is invalid",
        message: "Please Enter Valid Card Number",
        modeOfPayment: "Credit Card",
        issuedBy: cardDetails.card.niceType || "",
      });
    }
  } else {
    res.send({
      status: false,
      reason: "Card Number is invalid",
      message: "Please Enter Valid card Number",
      modeOfPayment: "Credit Card",
      issuedBy: cardDetails.card.niceType || "",
    });
  }
});

module.exports = router;
