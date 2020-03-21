const productRepo = require("../repository/product.repo");

class ProductService {
  async List() {
    try {
      const products = await productRepo.list();
      console.log("List Products", products);
      return products;
    } catch (ex) {
      throw ex;
    }
  }

  async FindById(Id) {
    try {
      const product = await productRepo.findById(Id);
      console.log("findById Product", product);
      return product;
    } catch (ex) {
      throw ex;
    }
  }

  async Store(args) {
    try {
      const inserted = await productRepo.insert(args);
      console.log("Inserted Product", inserted);
      return inserted;
    } catch (ex) {
      throw ex;
    }
  }

  async Update(args) {
    try {
      const updated = await productRepo.update(args);
      console.log("updated Product", updated);
      return updated;
    } catch (ex) {
      throw ex;
    }
  }

  async Delete(Id) {
    try {
      const deleted = await productRepo.delete(Id);
      console.log("deleted Product", deleted);
      return deleted;
    } catch (ex) {
      throw ex;
    }
  }
}

module.exports = new ProductService();
