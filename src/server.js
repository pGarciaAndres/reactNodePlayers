// server js
var http = require("http");

http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola NodeJs");
    response.end();
}).listen(8888);