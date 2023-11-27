const express = require("express");
// Import the Morgan logger middleware for logging HTTP requests
const logger = require("morgan");

// Import the cookie-parser middleware for handling cookies
const cookieParser = require("cookie-parser"); // Typo: It should be `require`

// Import the serve-favicon middleware for serving the favicon

// Node.js module for working with file paths
const path = require("path");

// Export a function that configures middleware for the Express app
module.exports = (app) => {
  // Use the Morgan logger middleware in 'dev' mode
  app.use(logger("dev"));

  // Parse incoming JSON requests
  app.use(express.json());

  // Parse incoming URL-encoded requests
  app.use(express.urlencoded({ extended: false }));

  // Parse cookies from incoming requests
  app.use(cookieParser());

  // Set the directory for views
  app.set("views", path.join(__dirname, "..", "views"));

  // Set the view engine to use Handlebars
  app.set("view engine", "hbs");

  // Serve static files from the 'public' directory
  app.use(express.static(path.join(__dirname, "..", "public")));
};
