const mongoose = require("mongoose");
const Bar = require("../models/bar");

const updateBarByName = async (name, updates) => {
  try {
    const result = await Bar.findOneAndUpdate({ name }, updates, { new: true });
    if (result) {
      console.log("Bar updated:", result);
      return result;
    } else {
      console.log("Bar not found");
      return null;
    }
  } catch (error) {
    console.error("Error updating bar:", error);
    throw error;
  }
};

module.exports = { updateBarByName };
