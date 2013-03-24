var express = require('express');
var app = express();
app.configure(function(){
  app.use('/media', express.static(__dirname + '/media'));
  app.use(express.static(__dirname + '/'));
});

app.listen(3000);