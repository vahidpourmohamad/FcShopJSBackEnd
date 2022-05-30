// const { gql } = require("apollo-server");
const {  gql } = require("apollo-server-express");
module.exports = gql`
  scalar Upload
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
    images: [String]
  }
  type Category {
    id: ID!
    name: String!
    parentId: Int
    imageSrc: String!
    uniUrl: String!
    createdAt: String!
  }
  type UploadedFileResponse {
    filename: String!
    mimetype: String!
    encoding: String!
    url: String!
  }
  type Comment {
    id: ID!
    userCreatedId: String!
    productId: String!
    body: String!
    point: String!
    createdAt: String!
  }
  type User {
    id: ID!
    email: String!
    token: String!
    username: String!
    createdAt: String!
  }
  input CommentInput {
    userCreatedId: String!
    productId: String!
    body: String!
    point: String!
  }
  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }
  input CategoryInput {
    name: String!
    parentId: String!
    imageSrc: String
    uniUrl: String
  } 
  input ProductInput {
    pcode: String!
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
    images: [String]
  }
  type Query {
    getProducts: [Product]
    getProduct(productId: ID!): Product
    getUsers: [User]
    getUser(userId: ID!): User
    getCategory(categoryId: ID!): Category
    # TODO
    getBestSellProducts: [Product]
    # TODO
    getBestSellProductsByCategory(categoryId: ID!): [Product]
    # TODO
    getBestRateProducts: [Product]
    # TODO
    getBestRateProductsByCategory(categoryName: String!): [Product]
    getProductsListByCategory(categoryName: String!): [Product]
    getCatgories: [Category]
    getCommentsByProduct(ProductID: String!): [Comment]
    getHighestPointedComment: [Comment]
  }
  type Mutation {
    createComment(CommentInput: CommentInput): Comment!
    deleteComment(CommentID: ID!): String!
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!
    createProduct(ProductInput: ProductInput): Product
    deleteProduct(productID: ID!): String!
    createCategory(CategoryInput: CategoryInput!): Category!
    deleteCategory(CategoryID: ID!): String!
    singleUpload(file: Upload!): UploadedFileResponse!
  }
`;
