/**
 * Created by talent on 2016/1/11.
 */
//用来处理二进制的数据流
var bf=new Buffer([ 0x68, 0x65, 0x6c, 0x6c, 0x6f ]);
console.log(bf.toString('utf-8'));
var bf1=new Buffer(2);
bf1[0]=0x68;
bf1[1]=0x65;
bf1[2]=0x6c;
console.log(bf1.toString('utf-8',0,2));


