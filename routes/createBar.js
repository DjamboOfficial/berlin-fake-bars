const express = require("express");
const router = express.Router();
const Bar = require("../models/bar");
const barsDB = require("../db/index");

router.post("/create-bar", async (req, res) => {
  const { name, bar_id, twist, location, capacity } = req.body;
  try {
    const newBar = new Bar({ name, bar_id, twist, location, capacity });
    await newBar.save();
    console.log("Bar created successfully:", newBar);
    res.redirect("/");
  } catch (error) {
    console.error("Error creating bar:", error);
    res.redirect("/login?error=Sorry, not successful!");
  }
});

module.exports = router;
