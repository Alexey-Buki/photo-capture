const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
  
  console.log('incoming request', request.url);

  switch (request.url) {
    case '':
    case '/':
    case 'index.html':
      fs.readFile('./src/index.html', (err, html) => {
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();``
      })
      break;
    default:
      response.writeHead(404);
      response.end();
  }
});

server.listen(8080);