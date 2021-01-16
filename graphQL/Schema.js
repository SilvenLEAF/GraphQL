// FAKE DATA
const { Animes, Characters } = require('../FakeData/Data');


const { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLScalarType, GraphQLNonNull } = require('graphql');








/* -------------------------------------------
.                   types
------------------------------------------- */
const AnimeType = new GraphQLObjectType({
  name: 'Animes',
  fields: ()=>({
    id: { type: GraphQLID },
    
  })
})




const CharacterType = new GraphQLObjectType({
  name: 'Characters',
  fields: ()=>({
    id: { type: GraphQLID },
  })
})








/* -------------------------------------------
.                   root query
------------------------------------------- */
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    anime: {
      type: AnimeType,
      args: { id: { type: GraphQLID } },

      resolve(parent, args){
        return Animes[0];
      }
    }
  }
})









/* -------------------------------------------
.                   mutation
------------------------------------------- */
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAnime: {
      type: AnimeType,
      args: { id: new GraphQLNonNull(GraphQLID) },

      resolve(parent, args){
        return Animes[0];
      }
    }

  }
})










/* -------------------------------------------
.                   EXPORT-ING
------------------------------------------- */
module.exports = new GraphQLSchema({
  query: RootQuery,
  
})