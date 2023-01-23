var http = require('http');
var url = require('url');

http.createServer( function(req, res){
    
    var q = url.parse(req.url, true);
    var datos = q.query; 

    res.writeHead(200, {'Content-Type': 'text/html'});
    let result = parseFloat(datos.num1) * parseFloat(datos.num2);
    res.write(datos.num1 + " x " + datos.num2 + " = " + result);
    res.write("<br>");
    let resultD = parseFloat(datos.num1) / parseFloat(datos.num2);
    res.write(datos.num1 + " / " + datos.num2 + " = " + resultD);

    res.end();

}).listen(3000);