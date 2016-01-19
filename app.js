/**
 * Created by talent on 2016/1/14.
 */
var express=require('express');
var http=require('http');
var fs=require('fs');
var path=require('path');
var app=express();
var login=require('./routes/login.js')
app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.listen('8090');
app.use('/',login)
/*
app.get('/',function(req,res){
    res.render('./index.html');
});
*/
module.exports=app;
