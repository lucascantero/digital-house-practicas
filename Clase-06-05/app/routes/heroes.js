var express = require("express");
var router = express.Router();
var jsonHeroes = require("../heroes.json");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("heroes", { title: JSON.stringify(heroes) });
});

router.get("/detalle/:id", function (req, res, next) {
  let detalle = jsonHeroes.find((heroe) => {
    console.log(req.params.id);
    return heroe.id == req.params.id;
  });
  if (detalle) {
    res.render("detalleHeroes", {
      detalles: JSON.stringify(detalle),
    });
  } else {
    res.redirect("/err");
  }
});

router.get("detalle/err"),
  function (req, res, next) {
    res.status(404).send("DALE JAPON");
  };

module.exports = router;
