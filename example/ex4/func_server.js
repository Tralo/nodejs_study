/*var http = require('http');
http.createServer(function(req,response){
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('Hello World');
	response.end();
}).listen(8888);*/

var http = require('http');
function onRequest(res,resp){
	resp.writeHead(200,{'Content-Type' : 'text/plain'});
	resp.write('Hello World');
	resp.end();
};
http.createServer(onRequest).listen(8888);
