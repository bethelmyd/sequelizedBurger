var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var db = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    db.Burger.findAll({})
    .then(function(dbBurger) {
      res.json(dbBurger);
      res.redirect("/burgers");
    });
});

router.post("/burgers/create", function(req, res) {
    db.Burger.create({
      burger_name: req.body.burger_name
    })
    .then(function(dbBurger) {
      res.json(dbBurger);
      res.redirect("/burgers");
    });
});

router.put("/burgers/update/:id", function(req, res) {

    db.Burger.update(req.body,
      {
        where: {
          id: req.params.id
        }
      })
    .then(function(dbBurger) {
      res.json(dbBurger);
      res.redirect("/burgers");
    });
  });

// Export routes for server.js to use.
module.exports = router;