const Repository = require("../db/repository");
const TransactionModel = require("../model/transaction.model");

class TransactionRepository extends Repository {
  constructor() {
    super(TransactionModel);
  }
}

module.exports = new TransactionRepository();