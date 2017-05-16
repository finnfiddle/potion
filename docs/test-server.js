require('http').createServer(function (request, response) {
  const url = request.url.slice(1);
  console.log(url);
  response.end(require('fs').readFileSync(
    require('path').join(__dirname, `../${url.length ? url : 'index.html'}`)
  , 'utf8'));
}).listen(process.env.PORT || 4002);
