const express = require('express');
const path = require('path');
//Init App
const app = express();

app.use('/resources',express.static(path.join(__dirname,'resources')));
app.set('views',__dirname+'/views');
app.engine('html', require('ejs').renderFile);

app.set('view engine','html')
//Get request matching '/'
app.get('/home' ,function(req,res){
  res.render('home');//Response Hello World
});

app.listen(8080, function() {
  console.log("Demo App listening on port 8080")
} )
