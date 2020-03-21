const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const transactionSchema = new Schema(
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product"
    },
    typeOfTransaction: ["entrance", "sale"],
    quantity: Number,
    provider: String
  },
  {
    timestamps: true
  }
);

module.exports = model("transaction", transactionSchema);
