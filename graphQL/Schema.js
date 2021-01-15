const graphql = require('graphql');
const {
  GraphQLObjectType,
  GraphQLSchema
} = graphql;







// BookType 
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: ()=>({
    
  })
});







// AuthorType
const AuthorType = new GraphQLObjectType({
  name: 'Author',
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