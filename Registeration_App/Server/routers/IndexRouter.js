const express = require("express");
const router = express.Router();

const ctrlRouter = require("../controllers/RegisterationController");

router.post("/register", ctrlRouter.register);

// router.post("/register", (req, res) => {
//   console.log();
//   console.log(req.body);
// });

router.get("/getData", ctrlRouter.getData);
router.get("/FirstName/:FirstName", ctrlRouter.getPerticularFirstName);
router.get("/LastName/:LastName", ctrlRouter.getPerticularLastName);
router.get("/EmailID/:EmailID", ctrlRouter.getPerticularEmailName);

router.get("/login/:EmailID", ctrlRouter.getPerticularEmailLogin);

router.delete("/delete/:EmailID", ctrlRouter.Delete);

router.patch("/patch/:EmailID", ctrlRouter.Patch);

module.exports = router;
