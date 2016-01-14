//简单的创建http;
var express=require('express');
var app=express();
app.get('/',function(req,res){
    res.send('<h1>hello node</h1>');
});
app.listen('3000');