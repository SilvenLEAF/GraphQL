const { GraphQLObjectType, GraphQLSchema } = require('graphql');







/* ----------------------------------------
.                   types
---------------------------------------- */
const AnimeType = new GraphQLObjectType({
  name: `AnimeType`,
  fields: ()=>{}
});



const CharacterType = new GraphQLInputObjectType({
  name: `CharacterType`,
  fields: ()=>{}
});










/* ----------------------------------------
.                   RootQuery
---------------------------------------- */
const RootQuery = new GraphQLObjectType({
  name: `RootQueryType`,
  fields: {}
});










/* ----------------------------------------
.                   Mutation
---------------------------------------- */
const Mutation = new GraphQLObjectType({
  name: `Mutation`,
  fields: {}
});










/* ----------------------------------------
.                   EXPORT-ING
---------------------------------------- */
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});