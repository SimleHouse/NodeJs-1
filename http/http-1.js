/**
 * Created by talent on 2016/1/11.
 */
//创建服务器
var http=require('http');
var url=require('url');
var server=http.createServer();
server.on('request',function(req,res){
    var urlStr=url.parse(req.url);
    console.log(urlStr);
    switch(urlStr.path){
        case '/':
            res.writeHead(200,{
                'content-type':'text/html;charset=utf-8'
            });
            res.end('<h1>首页</h1>');
            break;
        case'/user':
            res.writeHead(200,{
                'content-type':'text/html;charset=utf-8'
            });
            res.end('<h1>用户</h1>');
            break;
        default:
            res.writeHead(404,{
                'content-type':'text/html;charset=utf-8'
            });
            res.end('<h1>404</h1>');
    }

}).listen('3000','localhost');;



