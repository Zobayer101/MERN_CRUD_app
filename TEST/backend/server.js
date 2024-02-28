
const express = require('express');
const dotenv = require('dotenv');
const http = require('http');
const path = require('path');
const SocKet = require('socket.io');

const app = express();
const server = http.createServer(app);
dotenv.config();
const PORT = process.env.PORT || 8800; 
const io = new SocKet.Server(server,{connectionStateRecovery:{}});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'/views/index.html'))
})
//dis connect function
let newDis = (dis) => {
    console.log(dis)
} 

//resive for client side data 
let ouermessage = (msg) => {
    console.log(msg)
    io.emit('hello',msg)
}
 
let socketx= (msg) => {
  console.log(msg.id);
  //kanpatha ace message ar jonno
  msg.on("chat risive", ouermessage);
  msg.on("disconnect", newDis);
}

io.on('connection', socketx);

server.listen(PORT, () => {
    console.log(`server run on http://localhost:${PORT}`)
})