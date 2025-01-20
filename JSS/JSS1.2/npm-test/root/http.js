const options = {
    hostname: 'localhost',
    port: 3000,
    path: '/users',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'content-length': ArrayBuffer.byteLength(body)
    }
};
http.request(options, (res) => {
   // do something with response
})


//in get method we can pass the url as a string and it will be parsed to options object, its a shorthand for http.request and most commonly used
http.get("url", (res) => {
    // do something with response
})
//http.createServer() to create a server