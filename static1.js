var express = require('express')
var app = express()
var path = require('path')
app.set('view engine', 'jade')

app.set('views', path.join(__dirname, 'templates'))

//could use this instead
//  app.set('views', process.argv[3])



//app.use(express.static(process.argv[3] || path.join(__dirname, 'public')))
app.get('/home', function(req, res) {
  res.render('index', {date: new Date().toDateString()})
})
app.listen(process.argv[2]);


//node static1.js 3000 templates
//in browser localhost:3000/home
//the path is portnumber/home
