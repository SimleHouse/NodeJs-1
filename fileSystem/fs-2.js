/**
 * Created by talent on 2016/1/11.
 */
//文件打开读操作
var fs=require('fs');
fs.open('fs-2.txt','r',function(err,fd){
    if(err){
        console.log('文件打开失败');
    }else{
        var bf1=new Buffer('123456789');
        fs.read(fd,bf1,0,6,null,function(err, bytesRead, buffer){
            console.log(err);
            console.log(bf1.toString());
            console.log(bytesRead);
            console.log(buffer.toString());
        });
    }
});