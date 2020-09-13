// This line brings the Router function from Express library.
const router = require('express').Router()




// This line brings the NewsAPI. Remember "require('xxxx')" brings 'xxx'
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('703df4c0daf8488ebf80d33abf02edc0')   //It creates a new instance of NewsAPI. Just like we use Date(). Remember that to create a new date we use "const date = new Date()", it works just like JavaScript Date.



// This is our API
router.get('/news', async (req, res)=>{
  
  // This line is fetching/bringing the news from the NewsAPI
  const newsResponse = await newsapi.v2.topHeadlines({
    country: 'in',  //"in"  means "India", "us" means "US", "uk" means "UK" ..etc
    category: 'technology'
  });

  res.json(newsResponse);  //This line sends the Data to our FrontEND
})







module.exports = router;
// This line exports it to our app.js.


/* ****************************** 
.       IMPORTANT NOTE
*******************************/
/* 


"module.exports"   is the OLD VERSION  of "export" that you use in React
"requie()"    is the OLD VERSION of "import"  that you use in React  

*/