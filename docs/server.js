const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const port = process.env.PORT || process.argv[2] || 4002;

http.createServer((request, response) => {

  const uri = url.parse(request.url).pathname;
  let filename = path.join(__dirname, '../', uri);

  const stat = fs.statSync(filename);
  if (stat && stat.isDirectory()) filename += '/index.html';

  fs.readFile(filename, 'binary', (err, file) => {
    if (err) {
      response.writeHead(500, { 'Content-Type': 'text/plain' });
      response.write(`${err}\n`);
      response.end();
      return;
    }
    const meta = {};
    if (filename.indexOf('.html') > -1) meta['Content-Type'] = 'text/html';
    response.writeHead(200, meta);
    response.write(file, 'binary');
    response.end();
  });
}).listen(parseInt(port, 10));

console.log(`Static file server running at\n  => http://localhost:${port}/\nCTRL + C to shutdown`);
