const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

// Create routes and set up logic within those routes where required.
router.get("/burgers", function(req, res) {
    burger.selectAll(function(data) {
    res.json({ burgers: data });
  });
});

router.post("/burgers", function(req, res) {
  burger.insertOne([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, req.body.devoured
  ], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.insertId });
  });
});

router.put("/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;

  burger.updateOne(
        {   
          devoured: true
        }, condition, function(result) {
            if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
            } else {
            res.json({ id: req.params.id});
            }
        }
    );
});

router.delete("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.deleteOne(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;