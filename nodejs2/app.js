const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

const app = express();


////// connect to MongoDB

const dbURI =
  "mongodb+srv://doggo45:iLikeTreats666@keechcluster.vudhnux.mongodb.net/?retryWrites=true&w=majority";  // this is a dummy database, obviously links containing actual sensitive info shouldn't be in a public repository
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })  // the second argument will stop deprecation messages from logging, although it's unnecessary in this case
     .then(result => app.listen(3000))
     .catch(err => console.log(`Error: ${err}`));


///// register view engine

app.set('view engine', 'ejs');


//// middleware and static files

app.use(express.static('public'));  // everything in the 'public' folder will be available to the front end
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));


/// routes

app.get('/', (req, res) => {  // route handler function
    res.redirect('/blogs'); 
})                         

app.get("/about", (req, res) => {
  res.render("about", { title: "About" }); 
});


/// blog routes

app.get('/blogs', (req, res) => {
 Blog.find().sort({ createdAt: -1 })
   .then(result => {
     res.render('index', {title: 'All Blogs', blogs: result })
   }) 
   .catch(err => {
     console.log(`Error: ${err}`)
   })
})

app.post('/blogs', (req, res)=>{
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
  
})


app.get('/blogs/:id', (req, res) => {
  const id = req.params.id;
  console.log(id);
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Details" });
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
})

app.delete("/blogs/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(result => {    
      res.json({ redirect: '/blogs' }) //can't use redirect NodeJS method here - send JSON with redirect property with the URL as value
    })
    .catch((err) => {
      console.log(`Error: ${err}`);
    });
});



app.get("/create", (req, res) => {   //this route handler as well as app.use(...404..) are looking for blogs/styles.css  and I can't explain why. Until I can, I'll remove '/blogs' from the route.*** It's because styles.css is a relative path and I should use absolute i.e. '/styles.css' 
   res.render("create", { title: "Create" }); 
})


// 404 -- has to be at the bottom so express can go through all the other options
app.use((req, res) => {   // this is also middleware
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