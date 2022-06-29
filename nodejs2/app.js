const express = require('express');
const morgan = require('morgan');

const app = express();


///// REGISTER VIEW ENGINE
app.set('view engine', 'ejs');

/////LISTEN FOR REQS
 
app.listen(3000);

app.use(express.static('public'));  // everything in the 'public' folder will be available to the front end
app.use(morgan('dev'));

app.get('/', (req, res) => {  // route handler function
    const blogs = [
      {
        title: "Keech sniffs arse",
        snippet: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        title: "Keech eats garbage",
        snippet: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      },
      {
        title: "Keech runs home",
        snippet: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
      }
    ];
    res.render('index', {title: "Home", blogs});      // this replaces res.sendFile('./pages/page.html', {root: __dirname}); syntax 
})                            //the directory name HAS TO be VIEWS

app.get("/about", (req, res) => {
  res.render("about", { title: "About" }); 
});


app.get("/create", (req, res) => {   //this route handler as well as app.use(...404..) are looking for blogs/styles.css  and I can't explain why. Until I can, I'll remove '/blogs' from the route.
   res.render("create", { title: "Create" }); 
})





// 404 -- has to be at the bottom so express can go through all the other options
app.use((req, res) => {   // MIDDLEWARE
    res.status(404).render("404", { title: "Error" });
})



// app.use((req, res, next) => {       //Middleware from scratch
//     console.log('new request made');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// })



// app.get('/about-us', (req, res) => {
//     res.redirect('/about')  //  this would redirect from the old to the new route 
// })

// app.get("/contact", (req, res) => {
//   res.send("<h1>contact keech</h1>");
// });