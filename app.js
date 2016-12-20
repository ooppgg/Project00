var path = require('path');
var express =require('express');

var app = express();

app.use('/',express.static(path.join(__dirname,'views')));

var publicPath = path.join(__dirname,'public');
app.use('/public',express.static(publicPath));

var stylus = path.join(__dirname,'stylus');
app.use('/stylus',express.static(stylus));

app.listen(16907,function(){
	console.log('server run at port 16907');
})

module.exports = app;