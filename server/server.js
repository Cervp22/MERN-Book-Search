const express = require("express");
const path = require("path");
const db = require("./config/connection");
const { typeDefs, resolvers } = require("./schemas");
//import Apollo Server
const { ApolloServer } = require("apollo-server-express");
const { authMiddleware } = require("./utils/auth");
const { expressMiddleware } = require("@apollo/server/express4");
const app = express();

const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const startApolloServer = async () => {
  await server.start();
  server.applyMiddleware({ app });

  app.use("/graphql", expressMiddleware(server));
 

  db.once("open", () => {
    app.listen(
      PORT,
      () => console.log(`🌍 Now listening on localhost:${PORT}`),
      console.log("GraphQl at /graphql")
    );
  });
};

startApolloServer();
