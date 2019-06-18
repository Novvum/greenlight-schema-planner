const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { express: voyagerMiddleware } = require("graphql-voyager/middleware");
const schema = require("./schema");

const app = express();
const PORT = process.env.PORT || 3001;
const GRAPHQL_PATH = "/graphql";
const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true
});
server.applyMiddleware({
  app,
  path: GRAPHQL_PATH
});
app.use(
  "/voyager",
  voyagerMiddleware({
    endpointUrl: GRAPHQL_PATH,
    displayOptions: {
      sortByAlphabet: false
    }
  })
);

app.listen(PORT, function() {
  const port = this.address().port;

  console.log(`Started on http://localhost:${port}/`);
});
