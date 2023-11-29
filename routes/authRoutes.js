const { Router } = require("express");
const { checkAuth } = require("../middlewares/route-guard.js");
const router = new Router();
const bcryptjs = require("bcryptjs");
const saltRounds = 10;
const mongoose = require("mongoose");
const db = require("../db/index.js");
const User = require("../models/user");

router.get("/user-profile", (req, res) => {
  res.render("user-profile", { user: req.session.currentUser });
});

const userssDB = mongoose.createConnection(
  process.env.MONGODB_URI_USERS ||
    "mongodb://localhost:27017/berlin-fake-bars-users"
);

router.get("/signup", (req, res) => {
  res.render("auth/signup");
});

router.get("/login", (req, res) => {
  res.render("auth/login");
});

router.post("/login", (req, res) => {
  console.log(`Session: ${req.session}`);
  const { email, password } = req.body;

  if (!email || !password) {
    res.render("/auth/login", {
      errorMessage: "Here something's missing, my dear!",
    });
  }

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        console.log("Email not registered");
        res.render("auth/login", { errorMessage: "error" });
        return;
      } else if (bcryptjs.compareSync(password, user.password)) {
        req.session.currentUser = user;
        res.redirect("/");
      } else {
        console.log("Incorrect password. ");
        res.render("auth/login", {
          errorMessage: "User not found and/or incorrect password.",
        });
      }
    })
    .catch((error) => next(error));
});

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  console.log(req.body);
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  if (!passwordRegex.test(password)) {
    return res.render("auth/signup", {
      error:
        "Password must be at least 6 characters long and satisfy a bunch of other criteria!",
    });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.render("/", { error: "invalid email!" });
  }

  try {
    const hashedPassword = await bcryptjs.hash(password, saltRounds);
    // Here we create a new user
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();
    console.log("A new user was created: ", newUser);

    req.session.currentUser = newUser;
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.render("auth/signup", {
      error: "An error occurred while you were signing up!",
    });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session ", err);
    } else {
      res.redirect("/"); // Update the redirect path
    }
  });
});

module.exports = router;
