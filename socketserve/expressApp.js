var app = require("express")();
var httpServer = require("http").createServer(app);
// const options = { /* ... */ };
var io = require('socket.io')(httpServer, { cors: true });//跨域
httpServer,listen=(80);
app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
})
io.on("connection", socket => { 
    socket.emit('news',{hello:'world'});
    //监听客户端发送的内容
    socket.on('my other event',function (data) {
        console.log(data);
    })
});