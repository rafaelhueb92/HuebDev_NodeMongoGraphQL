const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");

class Application {
  constructor() {
    this.app = express();
    this.server = new ApolloServer(require("./resolve"));
    this.middlewares();
  }

  middlewares() {
    this.app.use("*", cors());
    this.server.applyMiddleware({
      app:this.app
    });
  }
}

module.exports = new Application().app;
