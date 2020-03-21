const Repository = require("../db/repository");
const TransactionModel = require("../model/transaction.model");

class TransactionRepository extends Repository {
  constructor() {
    super(TransactionModel);
  }
  async FindLast() {
    try {
      return await TransactionModel.findOne({}).sort({ _id: -1 }).populate("product");
    } catch (ex) {
      throw ex;
    }
  }
}

module.exports = new TransactionRepository();
