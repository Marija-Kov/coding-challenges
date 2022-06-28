const express = require('express');

const app = express();


///// REGISTER VIEW ENGINE
app.set('view engine', 'ejs');

/////LISTEN FOR REQS
 
app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
    //   {
    //     title: "Keech sniffs arse",
    //     snippet: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    //   },
    //   {
    //     title: "Keech eats garbage",
    //     snippet: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    //   },
    //   {
    //     title: "Keech runs home",
    //     snippet: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    //   }
    ];
    res.render('index', {title: "Home", blogs});      // this replaces res.sendFile('./pages/page.html', {root: __dirname}); syntax 
})                            //the directory name HAS TO be VIEWS

app.get("/about", (req, res) => {
  res.render("about", { title: "About" }); 
});


app.get('/blogs/create', (req, res) => {
   res.render("create", { title: "Create" }); 
})





// 404 -- has to be at the bottom so express can go through all the other options
app.use((req, res) => {
    res.status(404).render("404", { title: "Error" });
})







// app.get('/about-us', (req, res) => {
//     res.redirect('/about')  //  this would redirect from the old to the new route 
// })

// app.get("/contact", (req, res) => {
//   res.send("<h1>contact keech</h1>");
// });