const express = require('express');
const path = require('path');
//Init App
const app = express();

app.use('/resources',express.static(path.join(__dirname,'resources')));
app.set('views',__dirname+'/views');
app.engine('html', require('ejs').renderFile);

app.set('view engine','html')
//Get request matching '/'
app.get('/' ,function(req,res){
  res.render('home');//Response Hello World
});

const port = process.env.PORT || 3000
app.listen(port, function() {
console.log('Express server running on '+port);
} )
