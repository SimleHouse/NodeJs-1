/**
 * Created by talent on 2016/1/14.
 */
var express=require('express');
var http=require('http');
var fs=require('fs');
var app=express();
app.get('/',function(req,res){
    res.redirect('../index.html');
});
app.listen('8090');
