const express = require('express');
const path = require('path');
const http = require('http');
const app = express();
const server = require('http').Server(app);
var bodyparser = require('body-parser');
var urlParser = bodyparser.urlencoded({extended:false});
app.use('/resources',express.static(path.join(__dirname,'resources')));
app.set('views',__dirname+'/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine','html')
//Get request matching
app.get('/' ,function(req,res){
  res.render('home');
});
app.post('/' ,urlParser, function(req,res){
  console.log(req.body);
  res.render('home');
});
const port = process.env.PORT || 8080;
app.listen(port, function() {
console.log('Express server running on '+port);
})
