const http = require('http');
const myName = 'bhanu';

const server = http.createServer((req, res) => {
    console.log(req);
    res.end(myName); // Corrected statement and added quotes around 'myName'
});

server.listen(4000, () => {
    console.log('Server is running on http://localhost:3000');
});
