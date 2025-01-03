const http = require('http');
const fs = require('fs');

http.createServer(async (req, res) => {
    try{
        // const data = await fs.readFile('./server2.html');    // TypeError [ERR_INVALID_ARG_TYPE]: The "cb" argument must be of type function. Received undefined
        const data = await fs.readFileSync('./server2.html');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(data);
    }catch(err){
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(err.message);
    }
}).listen(8081, () => {
    console.log('listening on port 8081');
});