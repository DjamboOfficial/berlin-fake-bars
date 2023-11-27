const mongoose = require("mongoose");
const barSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bar_id: { type: Number, required: true },
  twist: { type: String, required: true },
  location: {
    type: String,
    enum: [
      "Kreuzberg",
      "Mitte",
      "Prenzlauer Berg",
      "Friedrichshain",
      "Charlottenburg",
      "Neukölln",
      "Wedding",
      "Moabit",
      "Schöneberg",
      "Tempelhof",
    ],
    required: true,
  },
  capacity: { type: Number, required: true },
  happyHour: { type: Boolean },
  nsfw: { type: Boolean },
});

const Bar = mongoose.model("Bar", barSchema);
module.exports = Bar;
