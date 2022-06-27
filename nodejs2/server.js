const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  res.setHeader('Content-Type', 'text/html');  // 3 steps to fulfill request
//   res.write('<h1>hello, pooches</h1>');
//   res.write("<p>hello, floofers</p>");
//   res.end();
fs.readFile("page.html", (err, data) => {
  err
    ? console.log(err)
    : //res.write(data);
      res.end(data);
});

});

server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000')
})