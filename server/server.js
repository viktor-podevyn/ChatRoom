const express = require('express');

const app = express();
const clientPath = ${ChatRoom}/client;
app.use(express.static(clientPath));
const server = http.createServer(app);
server.listen(8080, () =>{
    console.log("server running on "+port);
});