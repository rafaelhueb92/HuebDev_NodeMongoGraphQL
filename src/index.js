require("dotenv/config");
const app = require("./graphql");
const db = require("./core/db")(process.env.MONGO_URL);
const PORT = 4000 || process.env.PORT;

db.connect();

app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`)
);
