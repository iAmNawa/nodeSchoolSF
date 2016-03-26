var express = require('express')
var app = express()
app.use(express.static(process.argv[3] || path.join(__dirnameexpre, 'public')))
app.get('/', function(req, res) {
  res.end('This is a server!')
})
app.listen(process.argv[2]);
