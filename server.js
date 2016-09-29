var express = require("express");
var app = express();

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
})


app.get('/id/:id', function(req, res) {
    res.json({ hello: req.params.id})
})
console.log('hello world');
app.use(express.static(__dirname+'/public', {index: '_'}));


var PORT = process.env.PORT || '8080';
app.listen(PORT, function() {
    console.log('App listenes on '+PORT+' port')
})