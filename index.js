const PORT = process.env.PORT || 5000;
const express = require('express');

const app = express();

const http = require('http');

var server = http.Server(app);

app.use(express.static('client/public'))

server.listen(PORT, function() {
    console.log('server is running')
});