import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema";
import { Query } from "./resolvers/Query.resolver";
import { Category } from "./resolvers/Category.resolver";
import { Product } from "./resolvers/Product.resolver";
import { Mutation } from "./resolvers/Mutation";
import { categories, products, reviews } from "./db";

const resolvers = {
  Query,
  Mutation,
  Category,
  Product,
};

// Creating graphql server
const server = new ApolloServer({ typeDefs, resolvers });

// Using Apoloserver standalone server to listening on  port 3000
(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 3000 },
    context: async () => ({
      categories,
      products,
      reviews,
    }),
  });

  console.log(`server ready at: ${url}`);
})();
