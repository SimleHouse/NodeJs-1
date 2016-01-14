/**
 * Created by talent on 2016/1/14.
 */
var express=require('express');
var http=require('http');
var app=express();
/*
app.use(function(req,res,next){
    console.log("In comes a " + req.method + " to " + res.url);
    //next();
});
app.use(function(req,res,next){
    res.send('<h1> next()在这里终止</h1>');
    //next();
});
*/
app.use('/login',function(req,res){
    console.log(req.ip);
    res.redirect(3000,'index.html');
});
//http.createServer(app).listen(1337);
app.listen('3000');

