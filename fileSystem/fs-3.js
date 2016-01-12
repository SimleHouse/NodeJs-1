/**
 * Created by talent on 2016/1/11.
 */
//文件打开读写操作
var fs=require('fs');
fs.open('fs-2.txt','r+',function(err,fd){
    if(err){
        console.log('文件打开失败');
    }else{
        fs.write(fd,'xuhao','utf-8');
        fs.close(fd,function(err){
            if(err){
                console.log('文件关闭失败');
            }else{
                console.log('文件关闭成功');
            }
        })
    }
});