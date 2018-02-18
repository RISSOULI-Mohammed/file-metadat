// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

var multer  = require('multer');
var upload = multer({ dest: '/tmp/' });

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

// could also use the POST body instead of query string: http://expressjs.com/en/api.html#req.body
app.post("/file-metadata", upload.any(), function (request, response, next) {
  console.log(request.files)
  response.end("");
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
