/**
 * Created by talent on 2016/1/11.
 */
var fs=require('fs');

fs.rename('fs-1.txt','fs-2.txt',function(err,fd){
    if (err) throw err;
    fs.stat('fs-2.txt', function (err, stats) {
        if (err) throw err;
        console.log('stats: ' + JSON.stringify(stats));
    });
});

fs.open('fs-1.txt','r',function(err,fd){//如果文件打开成功 err则为null。否则err为一些错误的信息
    if(err){
        console.log('文件打开失败');
    }else{
        console.log( '文件打开成功' );
        console.log( fd+'--' );
    }
});