const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema
} = graphql;







// AnimeType 
const AnimeType = new GraphQLObjectType({
  name: 'Anime',
  fields: ()=>({
    
  })
});







// CharacterType
const CharacterType = new GraphQLObjectType({
  name: 'Character',
  fields: ()=>({

  })
});







/* -----------------------------------------
.                 RootQuery
----------------------------------------- */
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {}
});








/* -----------------------------------------
.                 Mutation
----------------------------------------- */
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {}
});










/* -----------------------------------------
.                 EXPORT-ING
----------------------------------------- */
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});