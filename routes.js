const fs = require('fs');

const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;

    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body>');
        res.write('<form action="/message" method="post"><input type="text" name="message"><button type="submit">Submit</button></form>');
        res.write('</body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', chunk => {
            console.log(chunk);
            body.push(chunk);
        });

        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            fs.writeFile('message.txt', message, err => {
                if (err) {
                    console.error(err);
                    res.statusCode = 500;
                    res.setHeader('Content-Type', 'text/html');
                    res.write('<html><head><title>Error</title></head><body><h1>Internal Server Error</h1></body></html>');
                    return res.end();
                }

                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            });
        });
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body><h1>Hello, this is Bhavani from my Node.js server!</h1></body>');
    res.write('</html>');
    res.end();
};

//module.exports = requestHandler;//first way
/*module.exports={
  //  handler:requestHandler,
    //someText:'Some hard coded text'
};*/
//module.exports.handler=requestHandler;
//module.exports.someText='some hard coded text';
exports.handler=requestHandler;
exports.someText='some hard coded text';