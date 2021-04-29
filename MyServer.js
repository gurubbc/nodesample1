var http=require('http')
var url=require('url')
var cbf=function(request,response)
{
    var url_parts=url.parse(request.url,true);
    var query=url_parts.query; // will return query object that contains all variables
    response.writeHead(200,{"Content-Type":"text/html"});
    response.write("Welcome to NodeJS Server program"+"<br>"); // browser
    var name=query.name;
    var passw=query.passw;

    if (name==passw)
        response.write('You are a valid user');
    else
        response.write('You are an invalid user');

    
    
    response.end();
}

var server=http.createServer().listen(8889);
server.on('request',cbf); // event binding
// we are mapping 'request' event to the call back function "cbf"
// Whenever the event "request" occurs, cbf will be called

console.log('Server started successfully on port# 8889')