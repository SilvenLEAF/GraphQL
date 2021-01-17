// FAKE DATA
const { Animes, Characters } = require('../FakeData/Data');

const { GraphQLObjectType, GraphQLSchema, GraphQLID, GraphQLString, GraphQLList } = require('graphql');







/* ----------------------------------------
.                   types
---------------------------------------- */
const AnimeType = new GraphQLObjectType({
  name: `AnimeType`,
  fields: ()=>({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    genre: { type: GraphQLString },
    synopsis: { type: GraphQLString },


    characters: {
      type: new GraphQLList(CharacterType),
      resolve(parent, args){
        return Characters.filter(item=> item.animeId == parent.id);
      }
    }
  })
});



const CharacterType = new GraphQLInputObjectType({
  name: `CharacterType`,
  fields: ()=>({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    line: { type: GraphQLString },
    animeId: { type: GraphQLID },


    anime: {
      type: AnimeType,
      resolve(parent, args){
        return Animes.find(item=> parent.animeId == item.id);
      }
    }
  })
});










/* ----------------------------------------
.                   RootQuery
---------------------------------------- */
const RootQuery = new GraphQLObjectType({
  name: `RootQueryType`,
  fields: {
    anime: {
      type: AnimeType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args){
        return Animes.find(item=> item.id == args.id);
      }
    },




    character: {
      type: CharacterType,
      args: { id: { type: GraphQLID } },
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
    }
  }
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