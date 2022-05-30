const { gql } = require('apollo-server-express');

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  scalar Date
  type GeneralResolverResponse {
    ok: Boolean!
    message: String
    error: Error
  }
`;

module.exports = typeDefs;
