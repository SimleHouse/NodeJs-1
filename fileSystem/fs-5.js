/**
 * Created by talent on 2016/1/11.
 */

var fs=require('fs');
fs.readFile('fs-2.txt',function(err,data){
    if(err){
        console.log('文件读取失败');
    }else{
        console.log(data.toString())
    }
});
//文件的删除
/*
fs.unlink('fs-2.txt', function(err) {
    if (err) {
        console.log('删除失败');
    } else {
        console.log('删除成功');
    }
});
*/