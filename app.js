
// This line will bring ExpressJS that you installed here so that we can use it. It works just like HTML <script src="./myJavaScriptFile.js" ></script>j
const express = require('express');





// firing Express APP. This is a basic ExpressJS set up.
const app = express();          //This line is creating the Express APP. We will use this "app"  A LOT.
app.use(express.json())         // This line gives us the power to receive the data from the FrontEND





/* -----------------------------------
.           routes
----------------------------------- */
app.use(require('./routes/newsRoutes'))





const PORT = process.env.PORT || 5000;    //Here we are asigning the value of PORT variable to any number. So when we will use it below, it will make our server to listen to that particular port. Just like React listens to port 3000 by default.  "process.env.PORT" is given by the host when we publish it (example. netlify, github, heroku, firebase ...etc), "5000" is given by us for our local computer. You can replace this "5000" with any number you like. Got it?
app.listen(PORT, ()=>{
  console.log(`Server is running on port ${PORT}`)  //This console.log is only to let us know when our server is started. It will only fire when our server starts.
})


// "app.listen"  makes our server to listen to certain port.