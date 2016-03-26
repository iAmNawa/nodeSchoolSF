var express = require('express')
var app = express()
app.get('/', function(req, res) {
  res.end('This is a server!')
})
app.listen(process.argv[2]);

//type in node expressserver.js 3000
//the port number you provide is the port that it will show up on
