/**
 * Created by talent on 2016/1/11.
 */
function log(data){
    process.stdout.write(data);

};
process.stdout.write('hello');
log('nihao');
//默认的情况下输入流是关闭的，要想处理输入流数据，首先要做的是开启输入流
process.stdin.resume();
process.stdin.on('data',function(chunk){
    console.log('你输入了:'+chunk);
});
