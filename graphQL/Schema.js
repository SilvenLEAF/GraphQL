// fake data
const { Animes, Characters } = require('../FakeData/Data');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLSkipDirective
} = require('graphql');








// AnimeType 
const AnimeType = new GraphQLObjectType({
  name: 'Anime',
  fields: ()=>({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    synopsis: { type: GraphQLString }
  })
});







// CharacterType
const CharacterType = new GraphQLObjectType({
  name: 'Character',
  fields: ()=>({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    line: { type: GraphQLString },
    animeId: { type: GraphQLID },
  })
});







/* -----------------------------------------
.                 RootQuery
----------------------------------------- */
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    anime: {
      type: AnimeType,
      args: { id: { type: GraphQLID } },

      resolve(parent, args){
        return Animes.find(item => item.id == args.id);
      }
    },


    character: {
      type: CharacterType,
      args: { id: { type: GraphQLID} },

      resolve(parent, args){
        return Characters.find(item => item.id == args.id);
      }
    }
  }
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
  
});