const { gql } = require("apollo-server");

module.exports = gql`
  type Product {
    id: ID!
  name: String!
  category: String!
  OLname: String!
  price: Number!
  shortDescription: String!
  LongDescription: String!
  OLshortDescription:String!
  OLLongDescription: String!
  H:  Number!
  W:  Number!
  L:  Number!
  wieght:  Number!
  color:  String!
  material:  String!
  createdAt: String!
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
    getProducts: [Post]
    getProducts(productId: ID!): Post
    //TODO GetCategory Product
    //TODO getbestPriceProdict
    //TODO getProdcuts List via categry
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createProduct(body: String!): Post!
    deleteProduct(productID: ID!): String!
  }
#   type Subscription {
#     newPost: Post!
#   }
`;
