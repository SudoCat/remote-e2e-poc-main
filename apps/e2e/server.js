const proxy = require('express-http-proxy')
const express = require('express')
var http = require('http');
var debug = require('debug')('remote-e2e-poc-sub:server');

const app = express()

app.use('/sub', proxy(process.env.SUB_APP_URL || 'https://remote-e2e-poc-sub.vercel.app/'))
app.use('/', proxy(process.env.MAIN_APP_URL || 'https://remote-e2e-poc-main.vercel.app/'))

const port = process.env.PORT || '3060';
app.set('port', port);
var server = http.createServer(app);
server.listen(port);
server.on('error', console.error);
server.on('listening', onListening);
app.listen()

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}