var http = require('http');
var url = require('url');

    http.createServer( function(req, res){
        var q = url.parse(req.url, true);
        var datos = q.query; 
        res.writeHead(200, {'Content-Type': 'text/html'});
        let result = parseFloat(datos.num1) * 2 ;
        res.write(datos.num1  + " = " + result);
        res.write("<br>");
        result2 = parseFloat(result) * 3;
        res.write(result  + " = " + result2);
        res.end();
    
    
}).listen(8000);