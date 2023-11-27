// Load environment variables from a .env file into process.env
require("dotenv").config();

// Import the Express.js framework
const express = require("express");

// Middleware to parse incoming request bodies in JSON and URL-encoded formats
const bodyParser = require("body-parser");

// MongoDB object modeling tool
const mongoose = require("mongoose");

// Import the database configuration from db/index.js
const db = require("./db/index"); // Update this line

// Handlebars.js templating engine for rendering views
const hbs = require("hbs");

// Create an Express application
const app = express();

// Parse URL-encoded and JSON request bodies
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Apply configurations from the config/index.js file
require("./config")(app); // This will apply the configurations in config/index.js

// Configure session handling in the application
require("./config/session.config.js")(app);

const createBarRoute = require("./routes/createBar.js");
app.use("/", createBarRoute);

// Define the port for the server to listen on, using either the environment variable or a default (3000)
const PORT = process.env.PORT || 3000;

// Set the view engine to use Handlebars
app.set("view engine", "hbs");

// Set the directory for views
app.set("views", __dirname + "/views");

// Include and use main routes defined in routes/mainRoutes.js
const mainRoutes = require("./routes/mainRoutes");
app.use("/", mainRoutes);

// Include and use authentication routes defined in routes/authRoutes.js
const authRoutes = require("./routes/authRoutes");
app.use("/auth", authRoutes);

// Start the server and listen on the specified port
app.listen(PORT, () => {
  console.log(`Server is going on port ${PORT} `);
});
