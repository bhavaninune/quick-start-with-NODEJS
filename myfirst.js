const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="post"><input type="text"><button type="submit">Submit</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.end(`
        <html>
        <head><title>First Page</title></head>
        <body>
            <h1>THIS IS BHAVANI'S FIRST RESPONSE FROM NODE.JS SERVER</h1>
        </body>
        </html>
    `);
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
