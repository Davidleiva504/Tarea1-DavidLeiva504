var http = require('http');
var moduloU = require('./moduloU');

http.createServer( function(req, res){
    res.writeHead(200, {'content-Type': 'Text/plain'});
    
    res.end("bienvenido  " + moduloU.U())
    res.write(moduloU.U())

}).listen(8080);
  