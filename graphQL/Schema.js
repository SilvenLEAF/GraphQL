// FAKE DATA
const { Animes, Characters } = require('../FakeData/Data');


const { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLNonNull, GraphQLString } = require('graphql');








/* -------------------------------------------
.                   types
------------------------------------------- */
const AnimeType = new GraphQLObjectType({
  name: 'Animes',
  fields: ()=>({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    synopsis: { type: GraphQLString }
  })
})




const CharacterType = new GraphQLObjectType({
  name: 'Characters',
  fields: ()=>({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    line: { type: GraphQLString },
    animeId: { type: GraphQLID },
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
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        synopsis: { type: new GraphQLNonNull(GraphQLString) }
      },

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
  mutation: Mutation  
})