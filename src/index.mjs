// ES Modules
// https://nodejs.org/api/esm.html
import http from "http";
import fs from "fs";

const SERVER_PORT = 3000;

// Create HTTP Server
// https://www.w3schools.com/nodejs/nodejs_http.asp
const server = http.createServer((req, res) => {
    console.log(`Request: URL "${req.url}"`);

    // Response static file
    // https://www.w3schools.com/nodejs/nodejs_filesystem.asp
    fs.readFile("./src/views/home.html", (err, data) => {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
    });
});

// Run HTTP Server
server.listen(SERVER_PORT);
console.log(`Server hosted at port ${SERVER_PORT}`);
