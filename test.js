var http = require('http');
http.createServer( (request, response) => {
  response.write('HELLOO, I am ANI');
  response.end;
}).listen(8888);