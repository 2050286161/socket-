var app = require('http').createServer(handler)
server = app.listen(80)
var io = require('socket.io')(server, { cors: true });//跨域
var fs = require('fs');

//处理web服务器正常的请求
function handler(req,res) {
    fs.readFile(__dirname + '/index.html',
        function (err, data) {
            if(err){
                res.writeHead(500);
                return res.end('Error loading index.html')
            }

            res.writeHead(200);
            res.end(data);
        }
    )
}
//实时通讯的连接
io.on("connection",function(socket){
    //客户端发送过来的数据
    socket.emit('news',{hello:'world'});
    //监听客户端发送的内容
    socket.on('my other event',function (data) {
        console.log(data)
    })
})
