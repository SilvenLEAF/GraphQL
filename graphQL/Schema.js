// fake data
const { Animes, Characters } = require('../FakeData/Data');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,  
  GraphQLList,
  GraphQLNonNull
} = require('graphql');







/* -----------------------------------------
.                 Types
----------------------------------------- */
// AnimeType 
const AnimeType = new GraphQLObjectType({
  name: 'Anime',
  fields: ()=>({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    synopsis: { type: GraphQLString },




    characters: {
      type: new GraphQLList(CharacterType),
      resolve(parent, args){
        return Characters.filter(item => parent.id == item.animeId);
      }
    }
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


    anime: {
      type: AnimeType,
      resolve(parent, args){
        return Animes.find(item => parent.animeId == item.id);
      }
    }
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
    },



    animes: {
      type: new GraphQLList(AnimeType),
      
      resolve(parent, args){
        return Animes;
      }
    },






    characters: {
      type: new GraphQLList(CharacterType),
      
      resolve(parent, args){
        return Characters;
      }
    },
  }
});








/* -----------------------------------------
.                 Mutation
----------------------------------------- */
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAnime: {
      type: AnimeType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        synopsis: { type: new GraphQLNonNull(GraphQLString) },     
      },


      resolve(parent, args){
        Animes.push({...args});
        return Animes.find(item => item.id == args.id);
      }
    },






    deleteAnime: {
      type: AnimeType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },        
      },


      resolve(parent, args){        
        return Animes.pop();
      }
    },







    updateAnime: {
      type: AnimeType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: new GraphQLNonNull(GraphQLString) },
        genre: { type: new GraphQLNonNull(GraphQLString) },
        synopsis: { type: new GraphQLNonNull(GraphQLString) },     
      },


      resolve(parent, args){
        Animes.pop();
        Animes.push({...args});
        return Animes.find(item => item.id == args.id);
      }
    }
  }
});










/* -----------------------------------------
.                 EXPORT-ING
----------------------------------------- */
module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});