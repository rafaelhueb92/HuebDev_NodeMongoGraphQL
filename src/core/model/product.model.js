const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const productSchema = new Schema(
  {
    name: String,
    description: String,
    ean: String,
    balance: { type: Number, default: 0 }
  },
  {
    timestamps: true
  }
);

module.exports = model("product", productSchema);
