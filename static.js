var express = require('express')
var app = express()
app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
app.get('/', function(req, res) {
  res.end('This is a server!')
})
app.listen(process.argv[2]);


//type in node static.js 3000 public
//3000 is the port number you want and public is the path
