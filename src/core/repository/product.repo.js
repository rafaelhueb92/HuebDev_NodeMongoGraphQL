const Repository = require("../db/repository");
const productModel = require("../model/product.model");

class ProductRepository extends Repository {
  constructor() {
    super(productModel);
  }
}

module.exports = new ProductRepository();