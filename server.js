'use strict';

// Dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var socketIO = require('socket.io');

var app = express();
var server = http.Server(app);
var io = socketIO(server);

app.set('port', 5000);
app.use('/static', express.static(__dirname + '/static'));

//Routing
app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname, 'index.html'));
});

server.listen(5000, function() {
    console.log('Starting server on port 5000');
});

// Add the WebSocket handlers
io.on('connection', function(socket) {

});


let m = [
    [0, 0, 2],
    [1, 3, 4],
    [2, 1, 0]
];
setInterval(function() {io.sockets.emit('matrix', m); }, 1000);
//io.sockets.emit('matrix', 'hi');
