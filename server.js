var WS = new require('ws');

var ws = new WS.Server({
  port: 8080
});

var clients = {};

ws.on('connection', function(ws){
  var id = Math.random();
  clients[id] = ws;
  ws.on('close', function(){
    console.log('Connection closed for client ' + id);
  });
  ws.on('message', function(msg){
    console.log('Message from client '+ id + ': ' + msg);
  });
});
