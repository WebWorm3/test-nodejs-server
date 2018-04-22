var socket = new WebSocket('ws://localhost:8080');

socket.onopen = function(e){
  console.log('connected');

  socket.send('WebWorm');
};

socket.onmessage = function(e){
  console.log(e.data.toString());
}
