/**
 * Created by talent on 2016/1/11.
 */
var express=require('express');
var app=express();
var mongodb=require('mongodb');
var mongoServer=new mongodb.Server('127.0.0.1',27017,{auto_reconnect:true});
var db=new mongodb.Db('testMongodb',mongoServer,{safe:true});//创建一张表
db.open(function(err,db){
    if(err){
        console.log('数据库连接错误');
    }else{
        db.createCollection('basicIfo',{safe:true},function(err,collection){
            if(err){
                console.log('连接表testMondodb失败');
            }else{
                //var data=[{name:'nima',password:'10080'}];
                collection.insertOne({name:'nima1',password:'10080'},function(err,result){
                    if(err){
                        console.log('Error:0'+err);
                    }else{
                        //console.log(result);
                    }
                });

                collection.find({name:'nima'}).toArray(function(err,result) {
                    if (err) {
                        console.log('数据查询失败');
                    } else {
                        console.log(result);
                    }
                });

            }
        });

    }
    //console.log(arguments);
    //hahahh
});



