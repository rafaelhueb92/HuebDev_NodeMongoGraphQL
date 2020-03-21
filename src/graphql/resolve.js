const { gql } = require("apollo-server");
const fs = require("fs");
const productService = require("../core/services/product.services");
const transactionService = require("../core/services/transaction.services");

const typeDefs = gql`
  ${fs.readFileSync(__dirname.concat("/schema.graphql"), "utf8")}
`;

const resolvers = {
  Query: {
    Product: async (_, { id }) => await productService.FindById(id),
    Products: async () => await productService.List(),
    LastTransaction: async () => await transactionService.LastTransaction()
  },
  Mutation: {
    StoreProduct: async (_, { include }) => {
      const { name, description, ean } = include;
      const res = await productService.Store({ name, description, ean });
      return res;
    },
    AlterProduct: async (_, { alter }) => {
      const { id, name, description, ean } = alter;
      const res = await productService.Update({ id, name, description, ean });
      return res;
    },
    DelProduct: async (_, { id }) => await productService.Delete(id),
    StoreTransaction: async (_, { include }) =>
      await transactionService.store(include)
  }
};

const resolve = { typeDefs, resolvers };

module.exports = resolve;
