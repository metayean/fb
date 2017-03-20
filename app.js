var express = require('express');
var app = express();

app.get('/app',function(req,res){
	res.sendFile(__dirname+"/"+"index.html");
});
app.listen(8081);