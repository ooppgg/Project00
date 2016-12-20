var path = require('path');
var express =require('express');

var app = express();

app.use('/',express.static(path.join(__dirname,'views')));

var publicPath = path.join(__dirname,'public');
app.use('/public',express.static(publicPath));

var stylus = path.join(__dirname,'stylus');
app.use('/stylus',express.static(stylus));

app.listen(9999,function(){
	console.log('server run at port 9999');
})

module.exports = app;