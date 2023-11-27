// Import the express-session middleware for managing sessions
const session = require("express-session");

// Import the connect-mongo library to store sessions in MongoDB
const connectMongo = require("connect-mongo");

// Import Mongoose for working with MongoDB
const mongoose = require("mongoose");

// Export a function that configures session handling for the Express app
module.exports = (app) => {
  // Use the express-session middleware to manage sessions
  app.use(
    session({
      // Secret key used to sign the session ID cookie
      secret: "your-secret-key",

      // Don't save session if unmodified
      resave: false,

      // Save new sessions even if they haven't been modified
      saveUninitialized: true,

      // Store sessions in MongoDB using connect-mongo and Mongoose connection
      store: new connectMongo({
        mongoUrl: process.env.MONGODB_URI_USERS, // Specify your MongoDB connection URL
        // Options for the connect-mongo library
        // ...
      }),

      // Configuration for the session ID cookie
      cookie: { maxAge: 60 * 60 * 1000 }, // Session duration in milliseconds (1 hour)
    })
  );
};
