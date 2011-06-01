/*
**
** Almost completely based on nodejs-proxy 
** by Peteris Krumins (peter@catonmat.net)  http://www.catonmat.net  
** https://github.com/pkrumins/nodejs-proxy
** I fixed a couple of bugs and stripped out a whole bunch of stuff based on white list and black lists
** That may need to be put back in again but driven from the database and appropriately wrapped
** to make it db independent (TBD), instead of being file driven.
** MaxOgden suggested I use nodejitsu/node-http-proxy
** But that seems to be focused on server side proxying and so expects to forward to a single host "target"
** In Leevr, and client-side proxying in general, the "target" is the whole Internet. 
** If someone knows how to deploy the nodejitsu proxy on client side - please let me know.
** I thought it important enough to get this out fast that I didn't spend time on it.
** It maybe simple enough to do but I didn't have time so don't mock me for that :-)
*/

var http = require('http');
var sys  = require('sys');
var fs   = require('fs');

var config = require('./config').config;


function server_cb(request, response) {
  var ip = request.connection.remoteAddress;
  sys.log(ip + ": " + request.method + " " + request.url);
  sys.log("client: " + request.headers['user-agent']);
  //sys.log("headers: " + JSON.stringify(request.headers));

  var host = request.headers['host'].split(':');
  var proxy = http.createClient(host[1] || 80, host[0])
  var proxy_request = proxy.request(request.method, request.url, request.headers);
  proxy_request.addListener('response', function(proxy_response) {
    proxy_response.addListener('data', function(chunk) {
      response.write(chunk, 'binary');
    });
    proxy_response.addListener('end', function() {
      response.end();
    });
    response.writeHead(proxy_response.statusCode, proxy_response.headers);
  });
  request.addListener('data', function(chunk) {
    proxy_request.write(chunk, 'binary');
  });
  request.addListener('end', function() {
    //proxy_request.close();
    proxy_request.end();
  });

  process.on('uncaughtException', function (err) {
   console.log('Caught exception' /* + err.stack()*/);
  });

}

sys.log("Starting Leevr on port "+ config.proxy_port + " - getting ready to overturn the Internet.");
http.createServer(server_cb).listen(config.proxy_port);
