var http = require('http')

var server = http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'text/plain'})
    //res.end("sadfsa");

    const fs = require("fs");
    var all = fs.readdirSync("./images/");
    res.end(all.toString());

});

//5501
server.listen(3000, '127.0.0.1');
console.log('Lst 3000')