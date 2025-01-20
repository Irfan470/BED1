// var http = require ('http');
// var secret = require('./data/secretNumbers');
// http.createServer(function(req, res){
//     if(req.url === "/api/numbers"){
//         res.write(secret.toString());
//     } else {
//         res.write("Hello World!");

        
//     }

    
//     res.end();
// }).listen(8080);    //the server object listens on port 8080
var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
    if(req.url === "/api/numbers" && req.method === "GET"){
        let rawdata = fs.readFileSync('data/secretNumbers.json');
        let secret = JSON.parse(rawdata);
        res.write(secret.toString());

    }
    else if (req.url === "/api/numbers" && req.method === "POST"){
      let data = '';
        req.on('data', chunk => {
            data += chunk;
        });
        req.on('end', () => {
            
            let rawdata = fs.readFileSync('data/secretNumbers.json');
            let secret = JSON.parse(rawdata);
            const newNumber = secret.contact([parsInt(data)]);
            fs.writeFileSync('data/secretNumbers.json', JSON.stringify(newNumber));
            res.end()


        });
    }else if(req.method === "GET"){
        res.write("Hello World!");
    }
    res.end();
}).listen(8080);    //the server object listens on port 8080