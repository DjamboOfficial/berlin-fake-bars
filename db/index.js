require("dotenv").config();
const mongoose = require("mongoose");
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/berlin-fake-bars";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Hooked up to da' Mongo! Database mojo brojo name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });

const barsDB = mongoose.createConnection(
  process.env.MONGODB_URI || "mongodb://localhost:27017/berlin-fake-bars"
);

module.exports = {
  mongoose: mongoose,
  barsDB: barsDB,
};
