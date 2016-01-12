/**
 * Created by talent on 2016/1/11.
 */
//文件的覆盖。指的是文件中的内容是否存在，如果存在则新的内容覆盖旧的内容 不存在则新建
var fs=require('fs');
var filename='fs-3.txt';
fs.writeFile(filename,'xuhao',function(err){
    if(err){
        console.log('数据保存错误');
    }else{
        console.log('数据保存成功');
    }
});
fs.writeFile(filename,'hello word',function(err){
    if(err){
        console.log('数据保存错误');
    }else{
        console.log('数据保存成功');
    }
});
var util=require('util');
fs.exists(filename,function(exists){
    util.debug(exists ? "存在" : "不存在!");
    if(exists){
        fs.appendFile(filename, '-leo', function(err) {
            if (err) {
                console.log('新的内容追加失败');
            } else {
                console.log('新内容追加成功');
            }
        })
    }else{
        fs.writeFile(filename, 'miaov', function(err) {
            if (err) {
                console.log('出错了');
            } else {
                console.log('创建新文件成功');
            }
        })
    }
})