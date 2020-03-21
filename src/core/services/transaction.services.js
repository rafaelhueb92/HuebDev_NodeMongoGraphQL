const productRepo = require("../repository/product.repo");
const transactionRepo = require("../repository/transaction.repo");

class BalanceService {
  async store(args) {
    try {
      const { id } = args.product;

      const { typeOfTransaction, quantity, provider } = args;

      const transactionArgs = {
        product: id,
        typeOfTransaction,
        quantity,
        provider
      };

      const { balance } = await productRepo.findById(id);

      const newBalance =
        args.typeOfTransaction === "entrance"
          ? balance + args.quantity
          : balance - args.quantity;

      const productBalance = {
        id,
        balance: newBalance
      };

      await Promise.all([
        transactionRepo.insert(transactionArgs),
        productRepo.update(productBalance)
      ]);

      console.log("Transaction Stored", args);

      return args;
    } catch (ex) {
      throw ex;
    }
  }

  async LastTransaction() {
    try {
      const res = await transactionRepo.FindLast();
      console.log("Last Transaction", res);
      return res;
    } catch (ex) {
      throw ex;
    }
  }
}

module.exports = new BalanceService();
