// Type Defs
export const typeDefs = `
    #Product schema
    type Product {
        id: ID!
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        image: String!
        onSale: Boolean!
        category: Category
        reviews: [Review!]!
    }

    type Category {
        id: ID!
        name: String!
        products: [Product!]
    }

    type Review {
        id: ID!
        title: String!
        date: String!
        comment: String!
        rating: Int!
    }

    type Query {
        hello: [String]
        products(filter: ProductsFilterInput): [Product!]!
        product(id: ID!): Product
        categories: [Category]!
        category(id: ID!): Category!
    }

    type Mutation { 
        addCategory(input: AddCategoryInput): Category
        addProduct(input: AddProductInput): Product
        addReview(input: AddReviewInput): Review
        deleteCategory(id: ID!): Boolean!
    }

    input ProductsFilterInput {
        onSale: Boolean
        avgRating: Int
    }

    input AddCategoryInput {
        name: String!
    }

    input AddProductInput {
        name: String!
        description: String!
        quantity: Int!
        price: Float!
        image: String!
        onSale: Boolean!
        categoryId: ID!
    }

    input AddReviewInput {
        title: String!
        date: String!
        comment: String!
        rating: Int!
        productId: ID!
    }
`;
