const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const { express: voyagerMiddleware } = require("graphql-voyager/middleware");
const schema = require("./schema");

const app = express();
const PORT = 3001;

const server = new ApolloServer({ schema });
server.applyMiddleware({ app });
app.use(
  "/voyager",
  voyagerMiddleware({
    endpointUrl: "/graphql",
    displayOptions: {
      sortByAlphabet: false
    }
  })
);

app.listen(PORT, function() {
  const port = this.address().port;

  console.log(`Started on http://localhost:${port}/voyager`);
});
