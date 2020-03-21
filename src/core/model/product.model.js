const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: String,
    description: String,
    ean: String,
    balance: Number
  },
  {
    timestamps: true
  }
);

module.exports = model("product", productSchema);
