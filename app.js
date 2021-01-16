// core modules
const express = require('express');
const path = require('path');


const { graphqlHTTP } = require('express-graphql');









// ---------------------FIRING EXPRESS APP
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'client/bulid')));









// ------------------------------GRAPH QL
app.use('/graphql', graphqlHTTP({
  schema: 'dfsfs',
  graphiql: true,
}));











/* -------------------------------------------
.                     routes
------------------------------------------- */


// catch-all handler
app.get('*', (req, res, next)=>{
  try {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  } catch (err) {
    next(err, req, res)
  }
});




// errors handler
app.use((err, req, res, next)=>{
  console.log(err.message);

  console.log(err)

  res.json({ msg: `Server error`, error: err.message });
});

// --------------------------------end of routes







// --------------------------------LISTEN
const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${ PORT }`);
});