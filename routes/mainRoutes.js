// mainRoutes.js
const express = require("express");
const router = express.Router();
const { checkAuth } = require("../middlewares/route-guard.js");

router.get("/", (req, res) => {
  const currentUser = req.session.currentUser;
  res.render("index", { title: "Index", currentUser });
});

router.get("/random", (req, res) => {
  res.render("random", { title: "Random Bar" });
});

router.get("/search", (req, res) => {
  res.render("search", { title: "Ciao!" });
});

router.get("/create-bar", checkAuth, (req, res) => {
  res.render("create-bar", { title: "Create Bar" });
});

module.exports = router;
