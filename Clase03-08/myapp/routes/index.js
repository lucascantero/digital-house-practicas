var express = require("express");
var router = express.Router();

/* GET home page. */
//NO LOGRE QUE FUNCIONE LAS COOKIE..
router.get("/", function (req, res, next) {
  if (1 == 0) {
    res.render("index", { title: req.cookie.color });
  } else {
    res.render("index", { title: "" });
  }
});

router.post("/", function (req, res, next) {
  if (req.body.check) {
    res.cookie("color", req.body.color);
    console.log(req.session.color);
    res.render("index", { title: req.body.color });
  } else {
    req.session.color = req.body.color;
    res.render("index", { title: req.session.color });
  }
});

router.get("/1", function (req, res, next) {
  res.render("index1", { title: req.session.color });
});

module.exports = router;
