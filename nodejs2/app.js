const express = require('express');

const app = express();


///// REGISTER VIEW ENGINE
app.set('view engine', 'ejs');

/////LISTEN FOR REQS
 
app.listen(3000);

app.get('/', (req, res) => {
    res.sendFile('./pages/page.html', {root: __dirname});
})

app.get("/about", (req, res) => {
  res.sendFile("./pages/about.html", {root: __dirname});
});

app.get("/contact", (req, res) => {
  res.send("<h1>contact keech</h1>");
});

app.get('/about-us', (req, res) => {
    res.redirect('/about')
})


// 404 -- has to be at the bottom so express can go through all the other options
app.use((req, res) => {
    res.status(404).sendFile("./pages/404.html", { root: __dirname });
})