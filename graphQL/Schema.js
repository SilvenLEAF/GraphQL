const { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLString } = require('graphql');







/* ----------------------------------------
.                   types
---------------------------------------- */
const AnimeType = new GraphQLObjectType({
  name: `AnimeType`,
  fields: ()=>({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    synopsis: { type: GraphQLString }
  })
});



const CharacterType = new GraphQLInputObjectType({
  name: `CharacterType`,
  fields: ()=>({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    line: { type: GraphQLString },
    animeId: { type: GraphQLID },
  })
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