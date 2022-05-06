const { gql } = require("apollo-server");

module.exports = gql`
  type Product {
    id: ID!
    name: String!
    category: String!
    OLname: String!
    price: String!
    shortDescription: String!
    LongDescription: String!
    OLshortDescription: String!
    OLLongDescription: String!
    H: Float
    W: Float
    L: Float
    wieght: Float
    color: String!
    material: String!
    createdAt: String!
  }
  type Category {
    id: ID!
    name: String!
    parentId: Int
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  type Query {
    getProducts: [Product]
    getProduct(productId: ID!): Product
    getUsers: [User]
    getUser(userId: ID!): User
    getCategory(categoryId: ID!): Category
    getBestSellProdocts: [Product]
    getBestSellProdoctsByCategory(categoryId: ID!): [Product]
    getBestRateProdocts: [Product]
    getBestRateProdoctsByCategory(categoryId: ID!): [Product]
    getProdoctsListByCategory(categoryId: ID!): [Product]
    getCatgories: [Category]
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createProduct(body: String!): Product!
    deleteProduct(productID: ID!): String!
    createCategory(body: String!): Product!
    deleteCategory(productID: ID!): String!
  }
`;
