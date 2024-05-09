const http = require('http');
// Create HTTP server to respond with simple message to all requests
const server = http.createServer( (request, response) => {
console.log("request from " + request.url);
response.writeHead(200, {"Content-Type": "text/plain"});
response.write("Hello to our first node.js application\n");
response.end();
});
// Listen on port 8080 on localhost
const port = 8080;
server.listen(port);

console.log("Server running at port=" + port);